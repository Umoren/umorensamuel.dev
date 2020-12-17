---
image: /images/uploads/git-error-on-git-pull-unable-to-update-local-ref-.png
title: How to install a package when you have a package-lock.json or yarn.lock file
date: 2020-12-17T12:05:34.903Z
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
description: Most times you try to install a package with yarn or npm and it
  ends up installing all the packages over again.
---
Most times you try to install a package with yarn or npm and it ends up installing all the packages over again regardless of flags you pass. It can be very frustrating cause most times you're just having issues with installing **sharp** but your project is working just fine without it and so you really just want to install this one package. 

Oh well, to escape this behavior add the `--no-package-lock` flag to your installation command and for yarn use `--no-lockfile`. This commands ensures that your package manager would not go ahead to installing all the packages everytime you introduce a new package to the family.

**npm**\
`npm install --no-package-lock <package-name>`

**yarn**

**`yarn add <package-name> --no-lockfile`**