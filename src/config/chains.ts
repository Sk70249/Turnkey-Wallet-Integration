// Supported blockchain networks
export const CHAINS = {
  ethereum: {
    name: 'Ethereum',
    chainId: 1,
  },
  polygon: {
    name: 'Polygon',
    chainId: 137,
  },
} as const;

export type ChainId = (typeof CHAINS)[keyof typeof CHAINS]['chainId'];