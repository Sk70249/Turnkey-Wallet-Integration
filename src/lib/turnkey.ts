import { TurnkeyClient } from '@turnkey/http';
import { ApiKeyStamper } from '@turnkey/api-key-stamper';
import { WebauthnStamper } from '@turnkey/webauthn-stamper';
import { ethers } from 'ethers';

const TURNKEY_CONFIG = {
  baseUrl: import.meta.env.VITE_TURNKEY_API_BASE_URL || 'https://api.turnkey.com',
  apiPublicKey: import.meta.env.VITE_TURNKEY_API_PUBLIC_KEY || '',
  apiPrivateKey: import.meta.env.VITE_TURNKEY_API_PRIVATE_KEY || '',
  organizationId: import.meta.env.VITE_TURNKEY_ORGANIZATION_ID || '',
};

// Initialize Turnkey client
export const turnkeyClient = new TurnkeyClient({
  baseUrl: TURNKEY_CONFIG.baseUrl,
});

// Initialize stampers
export const apiKeyStamper = new ApiKeyStamper({
  apiPublicKey: TURNKEY_CONFIG.apiPublicKey,
  apiPrivateKey: TURNKEY_CONFIG.apiPrivateKey,
});

export const webauthnStamper = new WebauthnStamper({
  rpId: window.location.hostname,
});

export const getStamper = (type: 'api-key' | 'webauthn') => {
  return type === 'api-key' ? apiKeyStamper : webauthnStamper;
};

// Wallet creation
export interface CreateWalletParams {
  authMethod: {
    type: 'api-key' | 'webauthn';
    label: string;
  };
  chainId?: number;
}

export interface WalletDetails {
  address: string;
  subOrganizationId: string;
  privateKeyId: string;
}

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