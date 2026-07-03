# Git & GitHub Publishing Guide

This document explains why the AI development environment cannot directly publish/push code to your remote GitHub repository and provides the instructions to do so from your local host machine.

## Why Direct Publishing is Restricted

1. **Authentication Credentials**: The AI agent environment runs in an isolated sandbox and does not have access to your personal GitHub credentials, SSH keys, or Personal Access Tokens (PATs).
2. **Security & Sandbox Isolation**: To prevent unauthorized changes or data leakage, the sandbox does not permit writing to external remote servers.
3. **Local Execution**: Git pushes require authentication against GitHub's servers, which can only be safely authorized from your local host terminal where your credentials are set up.

## How to Publish the Changes to Your GitHub

Since the agent writes all code changes directly to your local workspace, you can push them immediately from your own host terminal.

First, configure your Git remote origin using the SSH URL:

```bash
# 1. Set the remote repository URL
git remote add origin git@github.com:ChakreshChakshu/ADX-webapp.git

# (If origin already exists, update it instead)
# git remote set-url origin git@github.com:ChakreshChakshu/ADX-webapp.git

# 2. Stage all modifications
git add .

# 3. Commit the changes
git commit -m "feat: redesign outcomes and methodology sections"

# 4. Push to remote main branch
git push -u origin main
```
