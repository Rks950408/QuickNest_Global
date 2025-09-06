#!/bin/bash

echo "🚀 Deploying QuickNest Global Frontend to GitHub Pages..."

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found. Please run this script from the project root."
    exit 1
fi

# Check if frontend has required files
if [ ! -f "frontend/package.json" ]; then
    echo "❌ package.json not found in frontend directory."
    exit 1
fi

if [ ! -f "frontend/public/index.html" ]; then
    echo "❌ index.html not found in frontend/public directory."
    exit 1
fi

echo "✅ Frontend structure verified"

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Build directory not created. Build failed."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Build files are in the 'build' directory"
echo "📊 Build size:"
du -sh build/

echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "1. Go to your repository settings"
echo "2. Navigate to Pages section"
echo "3. Set source to 'GitHub Actions'"
echo "4. Push changes to trigger deployment"
echo ""
echo "🔗 Your site will be available at:"
echo "https://rks950408.github.io/QuickNest_Global"

echo ""
echo "📋 Manual deployment steps:"
echo "1. git add ."
echo "2. git commit -m 'Update frontend'"
echo "3. git push origin main"
