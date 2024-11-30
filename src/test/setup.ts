import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock environment variables
vi.mock('../lib/config', () => ({
  TURNKEY_CONFIG: {
    baseUrl: 'https://api.turnkey.com',
    apiPublicKey: 'test-public-key',
    apiPrivateKey: 'test-private-key',
    organizationId: 'test-org-id',
  },
}));