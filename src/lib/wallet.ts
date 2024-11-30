import { TurnkeyClient } from '@turnkey/http';
import { ethers } from 'ethers';
import { TURNKEY_CONFIG } from './config';
import { getStamper } from './auth';
import type { CreateWalletParams, WalletDetails } from './types';

const turnkeyClient = new TurnkeyClient({
  baseUrl: TURNKEY_CONFIG.baseUrl,
});

export const createWallet = async ({ authMethod, chainId = 1 }: CreateWalletParams): Promise<WalletDetails> => {
  const stamper = getStamper(authMethod.type);
  
  // Create sub-organization
  const { subOrganizationId } = await turnkeyClient.createSubOrganization({
    subOrganizationName: `Wallet-${chainId}-${Date.now()}`,
    stamper,
  });

  // Create private key
  const { privateKeyId } = await turnkeyClient.createPrivateKeys({
    type: 'PRIVATE_KEY_TYPE_SECP256K1',
    stamper,
    subOrganizationId,
    privateKeyName: `${authMethod.type}-wallet`,
  });

  // Get public key
  const { publicKey } = await turnkeyClient.getPublicKey({
    subOrganizationId,
    privateKeyId,
    stamper,
  });

  // Derive address
  const address = ethers.computeAddress(Buffer.from(publicKey, 'hex'));

  return {
    address,
    subOrganizationId,
    privateKeyId,
  };
};