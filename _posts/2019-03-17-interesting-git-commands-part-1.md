---
title: 3 awesome git tricks you should start using immediately
categories:
excerpt: Merge changes to previous commit, add rebase and squash to your daily git workflow
tags: git
date: 2019-03-17T08:42:12+05:45
last_modified_at:
---

## Merging your current change to previous commit

How many times does this happen to you?

You made some code changes, made a commit and are ready to push the code but you realize there is small change you need to make.

You will make the change, and create one more commit but you silently regret forgetting this simple and silly change.

Personally I struggle to come up with proper commit message and wish I could avoid making commits so that I would not have to think of a commit message.

If you want to merge new changes to previous commit you can just do this:

```sh
# add your content
git add .
# merge content to previous commit
git commit --ammend
```

Please take care that you have not pushed the commit to remote yet else you will have to force push after using this trick. {: .notice--info}

## Combining all commits in your branch

Frequently creating commits is a good practice while doing development works, but coming up with good message every commit is not every one's cup of tea.

Personally, I create lots of commits while I am working but 80% of the commits will probably have useless messages I would not like to see in master branch.

So before I send my code for review I just combine all commits in my branch to one.

```sh
git checkout yourBranch
git reset $(git merge-base master yourBranch)
git add -A
git commit -m "one commit on yourBranch"
```

## Rebasing

In our company we have this rule: You have to pull all the latest code from remote everyday before you start your work. And most of the time there is new code in development branch.

Merging development codes to the working branch creates one additional merge commit and make git history looks dirty. So, this is what I prefer.

```sh
git checkout development
git pull origin development
git checkout my-feature-branch
git rebase development
```

You will have to force push after rebasing. {: .notice--info}

However I would never recommend rebasing to beginners, as there may be more merge conflicts and merge conflicts are easily beginner's nightmares. Also to avoid more merge conflicts I squash all commits in my branch(see tip no. 2 above) before rebasing.

When I started using these commands, I only loved tip number 1 at first go, I fell in love with other two tips after I used them for some time.

Would you try any of these tips in your workflow? Were you already using any of these tips? Leave your comments below and let me know. I would also like to know other cool git commands you may be using that is not so commonly used.

References: <br />
<https://stackoverflow.com/questions/25356810/git-how-to-squash-all-commits-on-branch>{: rel="nofollow"}{:target="_blank"}
