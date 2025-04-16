#!/bin/bash

# Build script for Just Like Me Next.js application
# This script prepares the application for deployment to AWS Amplify

echo "Starting build process for Just Like Me marketplace application..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run linting
echo "Running linter..."
npm run lint

# Run tests
echo "Running tests..."
npm test

# Build the application
echo "Building the application..."
npm run build

# Create deployment package
echo "Creating deployment package..."
mkdir -p deployment
cp -r .next deployment/
cp package.json deployment/
cp next.config.js deployment/
cp -r public deployment/
cp docs/amplify-deployment.md deployment/
cp docs/amplify-config-files.md deployment/

# Create amplify.yml in the deployment directory
echo "Creating Amplify configuration..."
cat > deployment/amplify.yml << EOL
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
EOL

echo "Build process completed successfully!"
echo "Deployment package is ready in the 'deployment' directory."
echo "Follow the instructions in 'amplify-deployment.md' to deploy to AWS Amplify."
