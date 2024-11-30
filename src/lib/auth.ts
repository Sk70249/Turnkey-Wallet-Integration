import { ApiKeyStamper } from '@turnkey/api-key-stamper';
import { WebauthnStamper } from '@turnkey/webauthn-stamper';
import { TURNKEY_CONFIG } from './config';

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