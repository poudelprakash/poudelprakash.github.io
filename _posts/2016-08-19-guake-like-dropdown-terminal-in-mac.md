---
title: Guake like dropdown terminal in mac os with iterm2
categories:
excerpt: Guake like dropdown terminal in mac os with iterm2
tags:
comments: true
share: true
date: 2016-08-19T07:51:29+05:45
header:
  og_image: /assets/images/posts/guake-like-terminal-mac/header.jpg
last_modified_at: 2019-03-17T12:30:29+05:45
---

This article was updated on March 2019 for iterm2 version 3.2.7.
{: .notice--info}

{% include video id="TK3PUH30F5Q" provider="youtube" %}

Switching to new operating system comes with lots of nostalgic and uneasy feelings. Looking for similar experiences in new OS is quite common.

Dropdown terminal is one of the application developers switching to macos miss the most. Though `guake` does not work with mac, Iterm2 can be configured to setup as dropdown terminal.

## Installation

Installing iterm2 is quite easy, you just need to visit their [site](https://www.iterm2.com/index.html) and click download button, unzip and run.

## Configure iterm2 as dropdown terminal
Configuring iterm2 as dropdown terminal is really easy as you just need to assign a hotkey to open iterm.

Following are the steps you need to follow:

### Go to iterm2 preference
Assuming you are now running iterm2; on the top left you will see iterm2 written just beside apple logo, click there and go to preference.

### Click on keys tab

### Create a dedicated hotkey window
On the bottom of this window you will see a botton that says `create a dedicated hotkey window`.
Click on that and you will see a new window where you can configure hotkey(shortcut) for dropdown terminal.

### Assign hotkey
(On a newly opened window)<br>
Click on input box on the side of HotKey and then click the combination you want to assign to open iterm2. My combination is `CRTL-~`.

That's it, now you can open drop down terminal with shortcut you assigned in last step. In my case it is `CRTL+~`.

## Setup iterm2 to start when your mac starts
### Step 1: Goto System Preferences > User and groups > Login Items.
### Step 2: Drag and drop iterm from applications folders to login items.
You can see the video above in case of confusion.
{: .notice--info}

## Setup iterm2 to float over full screen apps (optional)
By default, iterm switches your workspace when you try to open it from full screen apps.
You can setup iterm to float over full screen apps with following steps:

### Step 1: Enable the 'Hide iTerm2 from the Dock...' option from the Advanced menu in preferences
Preference -> Advanced -> Hide iTerm2 from the dock ... => set to Yes
### Step 2: Configure your profile for all spaces:
Under preference -> profile -> window -> space : set to all spaces.
### Step 3: Restart Guake

Did this work for you? Please leave your comments below.

**References:** <br/>
<http://stackoverflow.com/questions/30850430/iterm2-hide-show-like-guake>{: rel="nofollow"}{:target="_blank"}
<http://apple.stackexchange.com/questions/48796/iterm-as-a-slide-out-terminal-from-the-top-of-the-screen>{: rel="nofollow"}{:target="_blank"}
<https://superuser.com/a/1149772>{: rel="nofollow"}{:target="_blank"}