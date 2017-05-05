---
title: Best way to share your code locally to non-core member
modified:
categories:
excerpt: Best way to share your code locally with non-core member using git, ruby/node/python.
tags:
comments: true
share: true
date: 2017-05-05T23:24:12+05:45
---
{% include toc %}

Today we are going to talk about how we can share our code with temporary team members without sharing proper github/bitbucket access.

## Method 1: Compress and Share (Past)
It was pretty easy in the past to compress and share code folder with your peer, but with advent of Single Page Applications, our apps' folder is usually cluttered with `node_modules` and `bower_components`. Compressing these folders could take more than 10-15 minutes depending on the size of app.

In several occasions, we have removed those folders before compressing. But that is tiresome if you have to do
frequently.

## Method 2: Serve the git locally (Present + Preferred)
Nowadays we just server git folder of project and peer clones the app.<br> It is a four line solution, 3 for sharer
and 1 for receiver.

### Code for sharer
```sh
cd your-awesome-project #move to the project you want to share
ruby -run -e httpd .git -p 8080 # serve you projects git folder over http on port 8080
git update-server-info
```

`git update-server-info` may be new command to even seasoned git users. It adds little extra information to our Git repository that a more complete Git server would handle for us. More technical details can be found in the [official
documentation](https://git-scm.com/docs/git-update-server-info)
{: .notice--info}

### Code for receiver
Now receiver can clone your repo.

```
git clone http://10.10.11.17:8080 ./your-awesome-project-cloned
```

I have been using internal ip(10.10.11.17) in example which you need to replace with sharer's ip.
This ip can be obtained with `ifconfig` command on mac,linux.
{: .notice--warning}

**Limitations**
At this point, anyone with the URL from Step above can pull code from your local repository. Without a complete Git daemon, they cannot push to your local repository, and you will need to run git update-server-info every time you make a change on your machine (e.g. after each new commit).

You may want to look at this article for complete access including push:
[Git daemon to quickly share git repo](http://railsware
.com/blog/2013/09/19/taming-the-git-daemon-to-quickly-share-git-repository/)

You can also use node, python to serve your git repository.
{: .notice--success}

Have you tried this before? How do you share your code with temporary project member. Please feel free to
comment below:

References:
1. [local clone over http](http://blog.testdouble.com/posts/2017-02-01-local-clone-over-http.html)