// Environment configuration
export const ENV = {
  TURNKEY: {
    BASE_URL: import.meta.env.VITE_TURNKEY_API_BASE_URL || 'https://api.turnkey.com',
    API_PUBLIC_KEY: import.meta.env.VITE_TURNKEY_API_PUBLIC_KEY || '',
    API_PRIVATE_KEY: import.meta.env.VITE_TURNKEY_API_PRIVATE_KEY || '',
    ORGANIZATION_ID: import.meta.env.VITE_TURNKEY_ORGANIZATION_ID || '',
  },
} as const;