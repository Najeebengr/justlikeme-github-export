# Just Like Me - AI Digital Twin Marketplace

A Next.js application that allows notable individuals to create AI-powered digital twins of themselves based on their voice, likeness, personality, and knowledge. Fans and consumers can interact with these digital twins through subscription plans or pay-per-minute options.

![Just Like Me Logo](/public/images/logo.png)

## Features

- **User Authentication**: Email/password and social login options
- **Talent Profiles**: Create and manage your digital twin profile
- **Content Upload**: Train your AI with voice, video, and knowledge content
- **Marketplace**: Browse available digital twins from notable individuals
- **Subscription Plans**: Monthly plans with set minutes allocation
- **Pay-Per-Minute**: Pay only for the time you use
- **Admin Dashboard**: Platform management and analytics
- **Talent Dashboard**: Track earnings and engagement metrics
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: Next.js 14 with App Router, React, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: NextAuth.js with multiple providers
- **Payment Processing**: Stripe integration for subscriptions and pay-per-minute
- **Deployment**: AWS Amplify

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Stripe account for payment processing
- Firebase project (optional, for additional authentication options)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/justlikeme.git
cd justlikeme
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Optional: Social Login Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
STRIPE_BASIC_PRICE_ID=your-stripe-basic-price-id
STRIPE_STANDARD_PRICE_ID=your-stripe-standard-price-id
STRIPE_PREMIUM_PRICE_ID=your-stripe-premium-price-id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Deployment

### AWS Amplify Deployment

For detailed instructions on deploying to AWS Amplify, see the [Amplify Deployment Guide](/docs/amplify-deployment.md).

### Other Deployment Options

This Next.js application can also be deployed on:

- [Vercel](https://vercel.com) (recommended for simplicity)
- [Netlify](https://netlify.com)
- Any platform supporting Next.js applications

## Project Structure

```
justlikeme/
├── docs/                  # Documentation files
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── admin/         # Admin dashboard pages
│   │   ├── api/           # API routes
│   │   ├── auth/          # Authentication pages
│   │   ├── components/    # UI components
│   │   ├── dashboard/     # User dashboard pages
│   │   ├── marketplace/   # Marketplace pages
│   │   ├── talent/        # Talent profile pages
│   │   ├── utils/         # Utility functions
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   └── styles/            # Additional styles
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore file
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by the Just Like Me branding
- Built with Next.js and React
- Styled with Tailwind CSS
