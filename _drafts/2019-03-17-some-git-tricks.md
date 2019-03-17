---
title: 3 awesome git tricks you should start using immediately
categories:
excerpt: Are you missing ftp in cli of mac os? Here is how you can get FTP and Telnet back in High Sierra?
tags: git
date: 2019-03-17T08:42:12+05:45
last_modified_at:
---
## Merging your current change to previous commit

How many times does this happen to you?
You made some code changes, made a commit and are ready to push the code but you realize there is small change you need to make.
You will make the change, and create one more commit but you silently regret forgetting this simple and silly change.

In such cases you can just do
```
# add your content
git add .
# merge content to previous commit
git commit --ammend
```

## Squashing commits in your branch

## Rebasing