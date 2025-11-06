## 1) Initialize a local repo and set remote
git init repo
cd repo
git remote add origin https://github.com/owner/repo.git

## 2) Enable sparse checkout
git config core.sparseCheckout true

## 3) Tell Git which folder(s) you want (paths are relative to repo root)
echo "path/to/folder/" >> .git/info/sparse-checkout

## 4) Pull only those files (default branch is usually main or master)
git pull origin main
