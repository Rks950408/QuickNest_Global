# GitHub Pages Setup Guide

## 🚀 Quick Setup Steps

### 1. Enable GitHub Pages
1. Go to your repository: https://github.com/Rks950408/QuickNest_Global
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Check Workflows
1. Go to **Actions** tab in your repository
2. You should see these workflows:
   - `Deploy to GitHub Pages` (main deployment)
   - `Test Deploy` (for testing)
   - `Deploy Frontend to GitHub Pages` (frontend-specific)

### 3. Trigger Deployment
The deployment should trigger automatically when you push to main branch. If not:

1. Go to **Actions** tab
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select **main** branch
5. Click **Run workflow**

### 4. Monitor Deployment
1. Click on the running workflow
2. Check the **build** job logs
3. Check the **deploy** job logs
4. Look for any error messages

## 🔧 Troubleshooting

### If Actions Don't Appear:
1. Check if workflows are in `.github/workflows/` folder
2. Verify YAML syntax is correct
3. Make sure files are committed and pushed

### If Build Fails:
1. Check Node.js version (should be 20)
2. Check if all dependencies are installed
3. Verify `frontend/package.json` exists
4. Check if `frontend/public/index.html` exists

### If Deploy Fails:
1. Check if GitHub Pages is enabled
2. Verify permissions are set correctly
3. Check if Pages environment is configured

## 📁 File Structure Check
Make sure these files exist:
```
.github/workflows/
├── deploy.yml                    # Main deployment workflow
├── test-deploy.yml              # Test workflow
├── deploy-frontend.yml          # Frontend-specific workflow
└── deploy-frontend-robust.yml   # Robust frontend workflow

frontend/
├── package.json                 # Dependencies
├── public/
│   └── index.html              # Required for React build
└── src/                        # React source code
```

## 🌐 Expected URLs
- **Repository**: https://github.com/Rks950408/QuickNest_Global
- **Live Site**: https://rks950408.github.io/QuickNest_Global
- **Actions**: https://github.com/Rks950408/QuickNest_Global/actions

## 🆘 Manual Deployment (If Needed)
If GitHub Actions don't work, you can deploy manually:

1. **Build locally**:
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm install -g gh-pages
   gh-pages -d build
   ```

## 📞 Support
If you're still having issues:
1. Check the Actions tab for error messages
2. Verify all files are committed to the repository
3. Make sure GitHub Pages is enabled in repository settings
4. Try running the "Test Deploy" workflow manually
