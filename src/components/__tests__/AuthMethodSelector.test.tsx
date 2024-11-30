import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthMethodSelector } from '../AuthMethodSelector';

describe('AuthMethodSelector', () => {
  const mockOnSelect = vi.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  it('renders all authentication methods', () => {
    render(<AuthMethodSelector onSelect={mockOnSelect} />);
    
    expect(screen.getByText('API Key')).toBeInTheDocument();
    expect(screen.getByText('Passkey')).toBeInTheDocument();
  });

  it('calls onSelect with correct method when API Key is clicked', () => {
    render(<AuthMethodSelector onSelect={mockOnSelect} />);
    
    fireEvent.click(screen.getByText('API Key'));
    
    expect(mockOnSelect).toHaveBeenCalledWith({
      type: 'api-key',
      label: 'API Key',
    });
  });

  it('calls onSelect with correct method when Passkey is clicked', () => {
    render(<AuthMethodSelector onSelect={mockOnSelect} />);
    
    fireEvent.click(screen.getByText('Passkey'));
    
    expect(mockOnSelect).toHaveBeenCalledWith({
      type: 'webauthn',
      label: 'Passkey',
    });
  });
});