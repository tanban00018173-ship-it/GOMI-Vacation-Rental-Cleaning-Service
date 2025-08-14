# GitHub Pages Deployment Script
Write-Host "Starting GitHub Pages deployment..." -ForegroundColor Green

# 1. Build project
Write-Host "1. Building Next.js project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

# 2. Create gh-pages branch
Write-Host "2. Creating gh-pages branch..." -ForegroundColor Yellow
git checkout -b gh-pages

# 3. Copy static files to root
Write-Host "3. Copying static files..." -ForegroundColor Yellow
Copy-Item -Path "out\*" -Destination "." -Recurse -Force

# 4. Add all files
Write-Host "4. Adding files to Git..." -ForegroundColor Yellow
git add .

# 5. Commit changes
Write-Host "5. Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy to GitHub Pages"

# 6. Push to GitHub
Write-Host "6. Pushing to GitHub..." -ForegroundColor Yellow
git push origin gh-pages

# 7. Switch back to main branch
Write-Host "7. Switching back to main branch..." -ForegroundColor Yellow
git checkout main

Write-Host "Deployment completed!" -ForegroundColor Green
Write-Host "Please enable GitHub Pages in your repository settings and select gh-pages branch as source." -ForegroundColor Cyan
