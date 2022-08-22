# decentralizedfreelance

## Development

### 1. Create a new branch

```
git checkout main
git pull
git checkout -b feature-name
```

### 2. Commit changes

```
git add .
git commit -m "your-comment-here"
git push
```

### 3. Merge main into branch

```
git checkout main
git pull
git checkout 'branch-name'
git merge main
git push
```

### 4. Deployment to prod

```
Go to github repository
Open new PR on branch against main
Review changes
Squash & Merge
Delete branch
```
