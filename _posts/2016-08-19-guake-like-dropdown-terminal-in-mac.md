---
title: Guake like dropdown terminal in mac os with iterm2
modified:
categories:
excerpt: Guake like dropdown terminal in mac os with iterm2
tags:
comments: true
share: true
date: 2016-08-19T07:51:29+05:45

---

Switching your preferred operating system is always an uneasy experience, you start missing your favorite softwares and you feel like going to your old comfortable system. This happened to me when switching to linux from windows and is happening while switching to mac os from linux.

One of the application I am missing so much in mac os is dropdown terminal. Guake does not work on mac and I was searching for alternative. Now I have found alternative in iterm2, let me walk you through how I installed iterm2 and set it up as dropdown terminal.

## Installation

Installing iterm2 is quite easy, you just need to visit their [site](https://www.iterm2.com/index.html) and click download button, unzip and run.

## Configure iterm2 as dropdown terminal
Configuring iterm2 as dropdown terminal is really easy as you just need to assign a hotkey to open iterm.

Following are the steps you need to follow:

### goto iterm2 preference
Assuming you are now running iterm2; on the top left you will see iterm2 written just beside apple logo, click there and go to preference.

### click on keys tab
On keys tab, on the bottom left you will see hot key options.

### toggle hotkey option
You need to select checkbox that says "show/hide iterm2 with a system-wide hotkey" to toggle hotkey. Toggling hotkey option will automatically create you a profile named "Hotkey Window".

## Assign hotkey
click on input box on the side of HotKey and then click the combination you want to assign to open iterm2. My combination is `CRTL-~`.

References:

<http://stackoverflow.com/questions/30850430/iterm2-hide-show-like-guake>
<http://apple.stackexchange.com/questions/48796/iterm-as-a-slide-out-terminal-from-the-top-of-the-screen> 
