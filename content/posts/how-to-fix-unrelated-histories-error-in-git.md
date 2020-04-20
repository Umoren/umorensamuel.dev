---
cover_image: /images/uploads/how-to-build-an-image-gall-2-.png
title: How to fix unrelated histories error in git.
date: 2020-04-20T22:46:16.125Z
published: true
tags:
  - git
  - bash
  - hacks
  - javascript
  - frontend
canonical_url: true
description: Have you ever tried merging or pulling and you end up with this
  unrelated histories error? Let's see why you're getting that message and how
  to solve in 30seconds
---
![Unrelated History error](/images/uploads/allowunrelated.png "snipshot of unrelated histories error")

## What is the cause ?

This git error occurs when two unrelated projects are merged together. 

**Simple Illustration:**  You create a new repo, add a description and you check the `Initialize this repository with a README ` option. You then go to your terminal and forget to pull before pushing, git would warn you and recommend that you `git pull` but then when you pull, you get this `fatal: refusing to merge unrelated histories error` and now you're jaded so you listen to Jaded by Drake (Yo! you see what i did there?). 



## How to fix it

To merge the unrelated histories, use this command

`git pull --allow-unrelated-histories`. 

That would fix the error and you can move on with your life.

For the nerds, check [here](https://github.com/git/git/blob/master/Documentation/RelNotes/2.9.0.txt#L58-L68) to learn more.