# AWS Amplify Configuration Files for Just Like Me

This document provides the necessary configuration files for deploying the Just Like Me marketplace application to AWS Amplify.

## amplify.yml

Create this file in your project root to configure the build process:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

## next.config.js

Update your Next.js configuration file to work with Amplify:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['justlikeme-storage-dev.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
    ],
  },
  // Enable SWR for better performance
  swcMinify: true,
  // Configure redirects for authentication
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/auth/register',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
```

## .env.local

Create this file for local development (do not commit to version control):

```
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-local-development-secret-key

# Stripe API Keys (test keys for development)
STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

# Social Login
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

## .env.production

Create this file for production environment variables (do not commit to version control):

```
# Authentication
NEXTAUTH_URL=https://justlikeme.com
NEXTAUTH_SECRET=your-production-secret-key

# Stripe API Keys (production keys)
STRIPE_PUBLIC_KEY=pk_live_your_stripe_public_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

# Social Login
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

## amplify/backend/auth/userPoolGroups/user-pool-group-precedence.json

This file configures user groups for different roles:

```json
{
  "admin": 1,
  "talent": 2,
  "user": 3
}
```

## amplify/backend/api/justlikeme/schema.graphql

Define your GraphQL schema for the API:

```graphql
type Talent @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: groups, groups: ["admin"], operations: [create, update, delete, read] },
  { allow: owner, operations: [update, read], ownerField: "id" }
]) {
  id: ID!
  slug: String! @index(name: "bySlug", queryField: "talentBySlug")
  name: String!
  title: String
  expertise: [String]
  bio: String
  about: String
  rating: Float
  reviewCount: Int
  minutePrice: Float
  subscriptionPrice: Float
  subscriptionMinutes: Int
  status: String
  featured: Boolean
  owner: String
}

type Content @model @auth(rules: [
  { allow: groups, groups: ["admin"], operations: [create, update, delete, read] },
  { allow: owner, operations: [create, update, read], ownerField: "userId" }
]) {
  id: ID!
  userId: String! @index(name: "byUser", queryField: "contentByUser")
  talentId: String! @index(name: "byTalent", queryField: "contentByTalent")
  contentType: String!
  fileName: String!
  fileSize: Int
  fileUrl: String
  status: String
  uploadDate: AWSDateTime
}

type Conversation @model @auth(rules: [
  { allow: groups, groups: ["admin"], operations: [create, update, delete, read] },
  { allow: owner, operations: [create, update, read], ownerField: "userId" },
  { allow: owner, operations: [read], ownerField: "talentId" }
]) {
  id: ID!
  userId: String! @index(name: "byUser", queryField: "conversationsByUser")
  talentId: String! @index(name: "byTalent", queryField: "conversationsByTalent")
  startTime: AWSDateTime
  endTime: AWSDateTime
  duration: Float
  cost: Float
  status: String
  messages: [Message] @hasMany
}

type Message @model @auth(rules: [
  { allow: groups, groups: ["admin"], operations: [create, update, delete, read] },
  { allow: owner, operations: [create, read], ownerField: "userId" },
  { allow: owner, operations: [read], ownerField: "talentId" }
]) {
  id: ID!
  conversationId: ID! @index(name: "byConversation", queryField: "messagesByConversation")
  userId: String
  talentId: String
  sender: String!
  content: String!
  timestamp: AWSDateTime
}

type Subscription @model @auth(rules: [
  { allow: groups, groups: ["admin"], operations: [create, update, delete, read] },
  { allow: owner, operations: [read], ownerField: "userId" },
  { allow: owner, operations: [read], ownerField: "talentId" }
]) {
  id: ID!
  userId: String! @index(name: "byUser", queryField: "subscriptionsByUser")
  talentId: String! @index(name: "byTalent", queryField: "subscriptionsByTalent")
  status: String!
  currentPeriodStart: AWSDateTime
  currentPeriodEnd: AWSDateTime
  minutesIncluded: Int
  minutesUsed: Int
  stripeSubscriptionId: String
}

type Payment @model @auth(rules: [
  { allow: groups, groups: ["admin"], operations: [create, update, delete, read] },
  { allow: owner, operations: [read], ownerField: "userId" },
  { allow: owner, operations: [read], ownerField: "talentId" }
]) {
  id: ID!
  userId: String! @index(name: "byUser", queryField: "paymentsByUser")
  talentId: String! @index(name: "byTalent", queryField: "paymentsByTalent")
  amount: Float!
  currency: String!
  status: String!
  type: String!
  stripePaymentId: String
  created: AWSDateTime
}
```

## amplify/backend/storage/s3justlikemestorage/parameters.json

Configure S3 storage for content uploads:

```json
{
  "bucketName": "justlikeme-storage",
  "authPolicyName": "s3_amplify_auth_policy",
  "unauthPolicyName": "s3_amplify_unauth_policy",
  "authRoleName": {
    "Ref": "AuthRoleName"
  },
  "unauthRoleName": {
    "Ref": "UnauthRoleName"
  },
  "selectedGuestPermissions": [
    "s3:GetObject",
    "s3:ListBucket"
  ],
  "selectedAuthenticatedPermissions": [
    "s3:PutObject",
    "s3:GetObject",
    "s3:ListBucket",
    "s3:DeleteObject"
  ],
  "s3PermissionsAuthenticatedPublic": "s3:PutObject,s3:GetObject,s3:DeleteObject",
  "s3PublicPolicy": "Public_policy_1",
  "s3PermissionsAuthenticatedUploads": "s3:PutObject",
  "s3UploadsPolicy": "Uploads_policy_1",
  "s3PermissionsAuthenticatedProtected": "s3:PutObject,s3:GetObject,s3:DeleteObject",
  "s3ProtectedPolicy": "Protected_policy_1",
  "s3PermissionsAuthenticatedPrivate": "s3:PutObject,s3:GetObject,s3:DeleteObject",
  "s3PrivatePolicy": "Private_policy_1",
  "AuthenticatedAllowList": "ALLOW",
  "GuestAllowList": "ALLOW",
  "s3ReadPolicy": "read_policy_1",
  "s3PermissionsGuestPublic": "s3:GetObject",
  "s3PermissionsGuestUploads": "DISALLOW",
  "GuestUploadAllowList": "DISALLOW",
  "s3PermissionsGuestProtected": "DISALLOW",
  "GuestProtectedAllowList": "DISALLOW",
  "s3PermissionsGuestPrivate": "DISALLOW",
  "GuestPrivateAllowList": "DISALLOW",
  "AuthenticatedUploadsAllowList": "ALLOW",
  "AuthenticatedProtectedAllowList": "ALLOW",
  "AuthenticatedPrivateAllowList": "ALLOW",
  "AuthenticatedPublicAllowList": "ALLOW",
  "s3PermissionsGuestRead": "s3:GetObject",
  "s3PermissionsAuthenticatedRead": "s3:GetObject"
}
```

## package.json

Update your package.json with the necessary scripts and dependencies:

```json
{
  "name": "justlikeme-nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest"
  },
  "dependencies": {
    "@aws-amplify/ui-react": "^5.0.0",
    "@stripe/react-stripe-js": "^2.1.0",
    "@stripe/stripe-js": "^1.54.0",
    "aws-amplify": "^5.3.0",
    "class-variance-authority": "^0.6.0",
    "clsx": "^1.2.1",
    "firebase": "^9.22.1",
    "next": "13.4.4",
    "next-auth": "^4.22.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwind-merge": "^1.13.0"
  },
  "devDependencies": {
    "@jest/globals": "^29.5.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@types/node": "20.2.5",
    "@types/react": "18.2.8",
    "@types/react-dom": "18.2.4",
    "autoprefixer": "10.4.14",
    "eslint": "8.42.0",
    "eslint-config-next": "13.4.4",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "node-mocks-http": "^1.12.2",
    "postcss": "8.4.24",
    "tailwindcss": "3.3.2",
    "typescript": "5.1.3"
  }
}
```

## jest.config.js

Configure Jest for testing:

```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

## jest.setup.js

Set up Jest with testing utilities:

```javascript
import '@testing-library/jest-dom';
```

## .gitignore

Update your .gitignore file to exclude sensitive information:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# amplify
amplify/team-provider-info.json
amplify/\#current-cloud-backend
amplify/.config/local-*
amplify/logs
amplify/mock-data
amplify/backend/amplify-meta.json
amplify/backend/.temp
build/
dist/
node_modules/
aws-exports.js
awsconfiguration.json
amplifyconfiguration.json
amplifyconfiguration.dart
amplify-build-config.json
amplify-gradle-config.json
amplifytools.xcconfig
.secret-*
```

These configuration files provide the foundation for deploying the Just Like Me marketplace application to AWS Amplify. Make sure to customize them according to your specific requirements and environment.
