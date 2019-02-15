---
title: install watchman in ubuntu
categories: linux 
excerpt: how to install watchman in ubuntu
tags:
comments: true
share: true
date: 2016-03-19T08:26:29+05:45
last_modified_at:
---

## Step 1: Install dependent files

```bash
$ sudo apt-get install automake autoconf python-dev build-essential
```

## Step 2: Install watchman

```bash
$ git clone https://github.com/facebook/watchman.git
$ cd watchman
$ git checkout v4.5.0  # the latest stable release
$ ./autogen.sh
$ ./configure
$ make
$ sudo make install
```

References:

- <https://facebook.github.io/watchman/docs/install.html>{: rel="nofollow"}{:target="_blank"}
- <http://stackoverflow.com/questions/33592197/how-to-install-facebook-watchman-on-ubuntu>{: rel="nofollow"}{:target="_blank"}
- <http://stackoverflow.com/questions/21530577/fatal-error-python-h-no-such-file-or-directory>{: rel="nofollow"}{:target="_blank"}
