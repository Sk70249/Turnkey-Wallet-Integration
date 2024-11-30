import { ApiKeyStamper } from '@turnkey/api-key-stamper';
import { WebauthnStamper } from '@turnkey/webauthn-stamper';
import { ENV } from '../config/environment';

// Initialize stampers for different authentication methods
export const apiKeyStamper = new ApiKeyStamper({
  apiPublicKey: ENV.TURNKEY.API_PUBLIC_KEY,
  apiPrivateKey: ENV.TURNKEY.API_PRIVATE_KEY,
});

export const webauthnStamper = new WebauthnStamper({
  rpId: window.location.hostname,
});

export const getStamper = (type: 'api-key' | 'webauthn') => {
  return type === 'api-key' ? apiKeyStamper : webauthnStamper;
};