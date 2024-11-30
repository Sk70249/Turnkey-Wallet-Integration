import { ethers } from 'ethers';
import { turnkeyClient } from './turnkey-client';
import { getStamper } from './stamper';
import type { CreateWalletParams, WalletDetails } from '../types/wallet';

export const createWallet = async ({ 
  authMethod, 
  chainId = 1 
}: CreateWalletParams): Promise<WalletDetails> => {
  const stamper = getStamper(authMethod.type);
  
  const { subOrganizationId } = await turnkeyClient.createSubOrganization({
    subOrganizationName: `Wallet-${chainId}-${Date.now()}`,
    stamper,
  });

  const { privateKeyId } = await turnkeyClient.createPrivateKeys({
    type: 'PRIVATE_KEY_TYPE_SECP256K1',
    stamper,
    subOrganizationId,
    privateKeyName: `${authMethod.type}-wallet`,
  });

  const { publicKey } = await turnkeyClient.getPublicKey({
    subOrganizationId,
    privateKeyId,
    stamper,
  });

  const address = ethers.computeAddress(Buffer.from(publicKey, 'hex'));

  return {
    address,
    subOrganizationId,
    privateKeyId,
  };
};