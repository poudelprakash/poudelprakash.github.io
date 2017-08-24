---
title: How to know if node version you are using is LTS release
categories: nodejs
excerpt: How to know if node version you are using is LTS release
tags:
comments: true
share: true
date: 2015-10-18T20:35:43+05:45
---

Developers can easily determine if they are working with an LTS version of Node.js by checking the `process.release.lts` property within node. This property will be undefined in regular releases.

```bash
$ node -v
v4.2.0
$ node -pe process.release.lts
Argon
```

Reference: <https://nodejs.org/en/blog/release/v4.2.0/#argon>{: rel="nofollow"}{:target="_blank"}