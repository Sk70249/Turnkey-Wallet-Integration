# Turnkey Wallet Integration

![Turnkey Wallet Integration](https://github.com/Sk70249/Turnkey-Wallet-Integration/blob/main/docs/turnkey-wallet.png)

A modern, secure wallet integration using Turnkey's SDK for creating embedded non-custodial wallets with multiple authentication methods.

## 🚀 Features

- ✨ Create embedded non-custodial wallets
- 🔐 Multiple authentication methods:
  - API Key authentication
  - Passkey (WebAuthn) support
- 🎯 Organization and sub-organization management
- 💼 Secure private key handling
- 🎨 Clean, modern UI with Tailwind CSS
- 📱 Responsive design
- ✅ Comprehensive test coverage

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Turnkey SDK
- Ethers.js
- Vitest for testing
- Lucide React for icons

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Turnkey account and API credentials
- Modern web browser with WebAuthn support (for passkey authentication)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/turnkey-wallet-integration.git
cd turnkey-wallet-integration
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_TURNKEY_API_BASE_URL=https://api.turnkey.com
VITE_TURNKEY_API_PUBLIC_KEY=your_public_key_here
VITE_TURNKEY_API_PRIVATE_KEY=your_private_key_here
VITE_TURNKEY_ORGANIZATION_ID=your_organization_id_here
```

4. Start the development server:
```bash
npm run dev
```

## 🧪 Testing

Run the test suite:
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## 📖 Project Structure

```
src/
├── components/           # React components
│   ├── AuthMethodSelector.tsx
│   └── WalletCreation.tsx
├── lib/                 # Core functionality
│   ├── auth.ts          # Authentication utilities
│   ├── config.ts        # Configuration
│   ├── turnkey.ts       # Turnkey integration
│   ├── types.ts         # TypeScript types
│   └── wallet.ts        # Wallet operations
├── test/                # Test utilities
│   ├── mocks/          # Mock implementations
│   └── setup.ts        # Test setup
└── App.tsx             # Main application component
```

## 🔒 Security

- Private keys are managed securely by Turnkey
- Authentication methods are implemented following best practices
- Environment variables are used for sensitive configuration
- WebAuthn provides strong authentication security

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Turnkey](https://turnkey.com) for their excellent SDK and documentation
- [Vite](https://vitejs.dev) for the blazing fast development experience
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the beautiful icons
