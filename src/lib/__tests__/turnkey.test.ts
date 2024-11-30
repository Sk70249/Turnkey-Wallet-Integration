import { describe, it, expect, beforeEach } from 'vitest';
import { createWallet } from '../turnkey';
import { mockTurnkeyClient } from '../../test/mocks/turnkey';

describe('turnkey', () => {
  beforeEach(() => {
    mockTurnkeyClient.createSubOrganization.mockClear();
    mockTurnkeyClient.createPrivateKeys.mockClear();
    mockTurnkeyClient.getPublicKey.mockClear();
  });

  describe('createWallet', () => {
    it('should create a wallet with API key authentication', async () => {
      const result = await createWallet({
        authMethod: { type: 'api-key', label: 'API Key' },
      });

      expect(result).toEqual({
        address: expect.any(String),
        subOrganizationId: 'test-sub-org-id',
        privateKeyId: 'test-private-key-id',
      });

      expect(mockTurnkeyClient.createSubOrganization).toHaveBeenCalled();
      expect(mockTurnkeyClient.createPrivateKeys).toHaveBeenCalled();
      expect(mockTurnkeyClient.getPublicKey).toHaveBeenCalled();
    });

    it('should create a wallet with WebAuthn authentication', async () => {
      const result = await createWallet({
        authMethod: { type: 'webauthn', label: 'Passkey' },
      });

      expect(result).toEqual({
        address: expect.any(String),
        subOrganizationId: 'test-sub-org-id',
        privateKeyId: 'test-private-key-id',
      });
    });
  });
});