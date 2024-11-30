import React from 'react';
import { Key, Fingerprint } from 'lucide-react';
import type { CreateWalletParams } from '../lib/turnkey';

interface AuthMethodSelectorProps {
  onSelect: (method: CreateWalletParams['authMethod']) => void;
}

export function AuthMethodSelector({ onSelect }: AuthMethodSelectorProps) {
  const authMethods: CreateWalletParams['authMethod'][] = [
    { type: 'api-key', label: 'API Key' },
    { type: 'webauthn', label: 'Passkey' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {authMethods.map((method) => (
        <button
          key={method.type}
          onClick={() => onSelect(method)}
          className="flex flex-col items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
        >
          {method.type === 'api-key' ? (
            <Key className="w-8 h-8 text-blue-600 mb-2" />
          ) : (
            <Fingerprint className="w-8 h-8 text-blue-600 mb-2" />
          )}
          <span className="text-sm font-medium">{method.label}</span>
        </button>
      ))}
    </div>
  );
}