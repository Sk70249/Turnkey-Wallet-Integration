import { useState } from 'react';
import { createWallet } from '../services/wallet';
import type { WalletDetails, CreateWalletParams } from '../types/wallet';

export const useWallet = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (params: CreateWalletParams) => {
    setIsCreating(true);
    setError(null);

    try {
      const wallet = await createWallet(params);
      return wallet;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create wallet');
      throw err;
    } finally {
      setIsCreating(false);
    }
  };

  return {
    create,
    isCreating,
    error,
  };
};