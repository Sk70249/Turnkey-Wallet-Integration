import React, { useState } from 'react';
import { WalletCreation } from './components/WalletCreation';
import type { WalletDetails } from './lib/turnkey';

function App() {
  const [wallet, setWallet] = useState<WalletDetails | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Turnkey Wallet Integration
        </h1>

        {!wallet ? (
          <WalletCreation onWalletCreated={setWallet} />
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Wallet Created!</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Address:</span>
                <br />
                <span className="break-all">{wallet.address}</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Sub-Organization ID:</span>
                <br />
                <span className="break-all">{wallet.subOrganizationId}</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Private Key ID:</span>
                <br />
                <span className="break-all">{wallet.privateKeyId}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;