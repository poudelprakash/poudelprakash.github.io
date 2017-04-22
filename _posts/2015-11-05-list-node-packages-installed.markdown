---
layout: single
title: List Node Packages Installed
modified:
categories: nodejs
excerpt: listing node packages installed in system
tags:
comments: true
share: true
date: 2015-11-05T19:16:11+05:45
---

If you are only interested in the packages installed globally without the full TREE then:

`npm -g ls --depth=0`

or locally (omit -g) :

`npm ls --depth=0`

`npm list` also can be used instead of `npm ls`.Then code would look like:
`npm list -g --depth=0`

Excluding depth will give you tree to show all packages with their respective dependencies.
