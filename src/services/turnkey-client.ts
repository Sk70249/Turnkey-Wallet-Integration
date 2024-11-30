import { TurnkeyClient } from '@turnkey/http';
import { ENV } from '../config/environment';

// Initialize and export Turnkey client
export const turnkeyClient = new TurnkeyClient({
  baseUrl: ENV.TURNKEY.BASE_URL,
});