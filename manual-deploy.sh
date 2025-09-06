#!/bin/bash

echo "🚀 Manual Deployment to GitHub Pages..."

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found. Please run this script from the project root."
    exit 1
fi

# Install gh-pages if not already installed
if ! command -v gh-pages &> /dev/null; then
    echo "📦 Installing gh-pages globally..."
    npm install -g gh-pages
fi

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
gh-pages -d build

echo "✅ Deployment completed!"
echo "🔗 Your site should be available at:"
echo "https://rks950408.github.io/QuickNest_Global"
