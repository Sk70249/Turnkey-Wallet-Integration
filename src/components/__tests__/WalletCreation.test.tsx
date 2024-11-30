import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { WalletCreation } from '../WalletCreation';
import { createWallet } from '../../lib/turnkey';

vi.mock('../../lib/turnkey', () => ({
  createWallet: vi.fn(),
}));

describe('WalletCreation', () => {
  const mockOnWalletCreated = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders authentication method options', () => {
    render(<WalletCreation onWalletCreated={mockOnWalletCreated} />);
    
    expect(screen.getByText('API Key')).toBeInTheDocument();
    expect(screen.getByText('Passkey')).toBeInTheDocument();
  });

  it('handles successful wallet creation', async () => {
    const mockWallet = {
      address: '0x123',
      subOrganizationId: 'test-sub-org',
      privateKeyId: 'test-key',
    };

    (createWallet as any).mockResolvedValueOnce(mockWallet);

    render(<WalletCreation onWalletCreated={mockOnWalletCreated} />);
    
    fireEvent.click(screen.getByText('API Key'));

    await waitFor(() => {
      expect(mockOnWalletCreated).toHaveBeenCalledWith(mockWallet);
    });
  });

  it('handles wallet creation error', async () => {
    const error = new Error('Failed to create wallet');
    (createWallet as any).mockRejectedValueOnce(error);

    render(<WalletCreation onWalletCreated={mockOnWalletCreated} />);
    
    fireEvent.click(screen.getByText('API Key'));

    await waitFor(() => {
      expect(screen.getByText('Failed to create wallet')).toBeInTheDocument();
    });
  });
});