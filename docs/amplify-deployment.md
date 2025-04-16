# AWS Amplify Deployment Guide for Just Like Me

This guide provides step-by-step instructions for deploying the Just Like Me marketplace application to AWS Amplify.

## Prerequisites

Before deploying, ensure you have:

1. An AWS account with appropriate permissions
2. AWS CLI installed and configured
3. Node.js and npm installed
4. The Amplify CLI installed (`npm install -g @aws-amplify/cli`)

## Step 1: Initialize Amplify in Your Project

1. Navigate to your project directory:
   ```bash
   cd /path/to/justlikeme-nextjs
   ```

2. Initialize Amplify:
   ```bash
   amplify init
   ```

3. Follow the prompts:
   - Enter a name for the project: `justlikeme`
   - Enter a name for the environment: `dev` (or `prod` for production)
   - Choose your default editor
   - Choose the authentication method (AWS profile or access keys)

## Step 2: Add Authentication

1. Add authentication to your project:
   ```bash
   amplify add auth
   ```

2. Choose the default configuration with social provider (Facebook, Google) as we need both email/password and social login options.

3. Push the changes to provision resources:
   ```bash
   amplify push
   ```

## Step 3: Add Storage for Content Upload

1. Add storage for user uploads:
   ```bash
   amplify add storage
   ```

2. Select "Content" for storing user files like voice, video, and knowledge content.

3. Configure storage with appropriate access levels:
   - Auth users only: create/update
   - Admin users: full access

4. Push the changes:
   ```bash
   amplify push
   ```

## Step 4: Add API for Backend Functionality

1. Add API to your project:
   ```bash
   amplify add api
   ```

2. Select "GraphQL" for the primary API.

3. Configure the API with appropriate authorization types:
   - API key for public access
   - Amazon Cognito User Pool for authenticated access

4. Define your schema based on the models in our application.

5. Push the changes:
   ```bash
   amplify push
   ```

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with the following variables:

```
# Authentication
NEXTAUTH_URL=https://your-amplify-domain.com
NEXTAUTH_SECRET=your-secret-key

# Stripe API Keys
STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

# Social Login
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

## Step 6: Configure Amplify for Next.js

1. Create an `amplify.yml` file in your project root:

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

2. Create a `next.config.js` file with Amplify configuration:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-s3-bucket-domain.amazonaws.com'],
  },
  // Enable SWR for better performance
  swcMinify: true,
}

module.exports = nextConfig
```

## Step 7: Deploy to Amplify Console

1. Commit your changes to a Git repository (GitHub, GitLab, BitBucket, etc.)

2. Log in to the AWS Management Console and navigate to AWS Amplify

3. Choose "New app" > "Host web app"

4. Connect to your Git provider and select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Environment variables: Add all the variables from your `.env.local` file

6. Review and confirm deployment

7. Wait for the deployment to complete

## Step 8: Configure Custom Domain (Optional)

1. In the Amplify Console, go to "Domain management"

2. Choose "Add domain"

3. Enter your domain name (e.g., justlikeme.com)

4. Follow the instructions to verify domain ownership and configure DNS settings

## Step 9: Set Up Stripe Webhooks

1. In your Stripe Dashboard, go to "Developers" > "Webhooks"

2. Add a new endpoint with your Amplify app URL:
   ```
   https://your-amplify-domain.com/api/stripe/webhooks
   ```

3. Select the events to listen for:
   - `payment_intent.succeeded`
   - `invoice.payment_succeeded`
   - `subscription.created`
   - `subscription.updated`
   - `subscription.deleted`

4. Copy the webhook signing secret and update your environment variable

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check build logs in the Amplify Console
   - Ensure all dependencies are correctly installed
   - Verify environment variables are properly set

2. **API Connection Issues**:
   - Check API configuration in Amplify
   - Verify API endpoints are correctly defined
   - Check authentication configuration

3. **Authentication Problems**:
   - Verify Cognito User Pool settings
   - Check social provider configuration
   - Ensure NextAuth is properly configured

### Getting Help

If you encounter issues not covered in this guide:

1. Check AWS Amplify documentation: https://docs.aws.amazon.com/amplify/
2. Visit the AWS Amplify forum: https://forums.aws.amazon.com/forum.jspa?forumID=252
3. Open an issue in the project repository

## Maintenance and Updates

### Updating Your Application

1. Make changes to your codebase
2. Commit and push to your Git repository
3. Amplify will automatically detect changes and deploy updates

### Monitoring

1. Use AWS CloudWatch to monitor application performance
2. Set up alerts for error rates and response times
3. Monitor Stripe dashboard for payment processing

## Security Considerations

1. Regularly rotate API keys and secrets
2. Enable AWS WAF for additional security
3. Implement rate limiting for API endpoints
4. Regularly update dependencies to patch security vulnerabilities

---

This deployment guide provides the basic steps to deploy the Just Like Me marketplace application to AWS Amplify. For more detailed information, refer to the [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/).
