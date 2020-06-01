---
cover_image: /images/uploads/git-error-on-git-pull-unable-to-update-local-ref-.png
title: Git error on git pull (unable to update local ref)
date: 2020-06-01T15:19:16.154Z
published: true
tags:
  - git
  - command-line-interface
  - terminal
  - bash
  - github
  - cmd
  - ssh
  - developer
canonical_url: true
description: Most times you try pulling from a remote branch and your terminal
  hits you with "Unable to update local ref". In this article, we would briefly
  learn why and how to fix it.
---
### The Issue:

   `(unable to update local ref)` OR

```
  error: Couldn't set ORIG_HEAD
  fatal: Cannot update the ref 'ORIG_HEAD'
```

### Possible Causes:

* Your clone/fork of the git repository is not updated with the remote branch updates.
* The remote repository you are pulling from, is not tied to the local repository on your computer. 

### Solution:

* ```git
   git gc --prune=now
  ```

  or

  ```git
  git remote prune origin
  ```

   This would remove objects that are no longer referenced and duplicates.
* If this doesn't fix your problem, then you might have to hard reset to the last commit.

  ```git
    git reflog 
    git reset --hard <id> 
    git pull origin <branch> 
  ```

  git reflog: This would provide list of previous commits and their ids

### Summary

That's all! You were expecting a longer read? Learn more about refs, `git prune` and `git gc`.

[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)

[Git Prune](https://git-scm.com/docs/git-prune)

[GC and Pruning](http://alblue.bandlem.com/2011/11/git-tip-of-week-gc-and-pruning-this.html)

[Stack Overflow](https://stackoverflow.com/questions/10068640/git-error-on-git-pull-unable-to-update-local-ref)