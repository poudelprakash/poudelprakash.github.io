---
title: How to copy value from variable to clipboard
categories: javascript
excerpt: How to copy to clipboard using jquery
tags: jquery
comments: true
share: true
date: 2017-07-25T23:24:12+05:45
last_modified_at: 
---

In javascript, copying a value from variable to clipboard is not straightforward as there is no direct command.
 
There is this one command: `document.execCommand('copy')` which copies selected content to clipboard. We can use this command to copy content from a variable with a bit of workaround.
 
Since we need to select the value before copying, we will do this in three steps: 

1. Create an input element and insert the value of variable into it 
2. Select it
3. Copy it
 
 Here is jquery version of the code:
 
 ```js
 var dummyContent = "this is to be copied to clipboard";
 var dummy = $('<input>').val(dummyContent).appendTo('body').select()
 document.execCommand('copy')
 ```
 
Here `dummyContent` is the variable whose value we intended to copy to clipboard and `dummy` is input element we created to temporarily hold value. 
Then we copied content of dummy input element using `document.execCommand('copy')`.

This is helpful when you are writing some web application where you need to copy some content to clipboard when some button is clicked or any other action.

There are also times as a developer, you just need to copy some variable/object/whatever for debugging or reference, most browsers now support a `copy()` function (as in `copy(someVariable)`) from the devtools console. Thank you @skippykawakami for mentioning this in comments.
