#!/bin/bash

echo "🚀 Deploying QuickNest Global Frontend to GitHub Pages..."

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found. Please run this script from the project root."
    exit 1
fi

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build files are in the 'build' directory"
echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "1. Go to your repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'GitHub Actions'"
echo "4. Push changes to trigger deployment"
echo ""
echo "🔗 Your site will be available at:"
echo "https://rks950408.github.io/QuickNest_Global"
