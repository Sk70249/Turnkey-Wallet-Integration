export interface WalletDetails {
  address: string;
  subOrganizationId: string;
  privateKeyId: string;
}

export interface AuthenticationMethod {
  type: 'api-key' | 'webauthn';
  label: string;
}

export interface CreateWalletParams {
  authMethod: AuthenticationMethod;
  chainId?: number;
}