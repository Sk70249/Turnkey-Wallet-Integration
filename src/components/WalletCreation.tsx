import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { createWallet, type CreateWalletParams, type WalletDetails } from '../lib/turnkey';
import { AuthMethodSelector } from './AuthMethodSelector';

interface WalletCreationProps {
  onWalletCreated: (wallet: WalletDetails) => void;
}

export function WalletCreation({ onWalletCreated }: WalletCreationProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAuth, setSelectedAuth] = useState<CreateWalletParams['authMethod'] | null>(null);

  const handleCreateWallet = async (authMethod: CreateWalletParams['authMethod']) => {
    setIsCreating(true);
    setError(null);

    try {
      const wallet = await createWallet({ authMethod });
      onWalletCreated(wallet);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create wallet');
      setSelectedAuth(null);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Wallet className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Create New Wallet</h2>
      </div>

      {!selectedAuth ? (
        <>
          <p className="text-gray-600 mb-4">Choose your authentication method:</p>
          <AuthMethodSelector onSelect={handleCreateWallet} />
        </>
      ) : (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      )}

      {error && (
        <p className="mt-4 text-red-600 text-sm">{error}</p>
      )}
    </div>
  );
}