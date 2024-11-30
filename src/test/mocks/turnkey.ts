import { vi } from 'vitest';

export const mockTurnkeyClient = {
  createSubOrganization: vi.fn().mockResolvedValue({ subOrganizationId: 'test-sub-org-id' }),
  createPrivateKeys: vi.fn().mockResolvedValue({ privateKeyId: 'test-private-key-id' }),
  getPublicKey: vi.fn().mockResolvedValue({ publicKey: '0x123456' }),
};

vi.mock('@turnkey/http', () => ({
  TurnkeyClient: vi.fn().mockImplementation(() => mockTurnkeyClient),
}));

vi.mock('@turnkey/api-key-stamper', () => ({
  ApiKeyStamper: vi.fn().mockImplementation(() => ({
    stamp: vi.fn().mockResolvedValue('test-stamp'),
  })),
}));

vi.mock('@turnkey/webauthn-stamper', () => ({
  WebauthnStamper: vi.fn().mockImplementation(() => ({
    stamp: vi.fn().mockResolvedValue('test-stamp'),
  })),
}));