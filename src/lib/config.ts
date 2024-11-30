export const TURNKEY_CONFIG = {
  baseUrl: import.meta.env.VITE_TURNKEY_API_BASE_URL || 'https://api.turnkey.com',
  apiPublicKey: import.meta.env.VITE_TURNKEY_API_PUBLIC_KEY || '',
  apiPrivateKey: import.meta.env.VITE_TURNKEY_API_PRIVATE_KEY || '',
  organizationId: import.meta.env.VITE_TURNKEY_ORGANIZATION_ID || '',
};

export const SUPPORTED_CHAINS = {
  ethereum: {
    name: 'Ethereum',
    chainId: 1,
  },
  polygon: {
    name: 'Polygon',
    chainId: 137,
  },
} as const;