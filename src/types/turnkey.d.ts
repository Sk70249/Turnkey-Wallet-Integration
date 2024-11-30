declare module '@turnkey/http' {
  export interface TurnkeyClient {
    createSubOrganization(params: {
      subOrganizationName: string;
      stamper: any;
    }): Promise<{ subOrganizationId: string }>;

    createPrivateKeys(params: {
      type: string;
      stamper: any;
      subOrganizationId: string;
      privateKeyName: string;
    }): Promise<{ privateKeyId: string }>;

    getPublicKey(params: {
      subOrganizationId: string;
      privateKeyId: string;
      stamper: any;
    }): Promise<{ publicKey: string }>;
  }

  export class TurnkeyClient {
    constructor(config: { baseUrl: string });
  }
}