---
title: "Reduce Global Variables"
categories: javascript
excerpt: small discussion on how to reduce global variables in js
tags:
  - js best practices
comments: true
share: true
date: 2015-10-02T07:19:24+05:45
---

{% include toc %}

>"By reducing your global footprint to a single name, you significantly reduce the chance of bad interactions with other applications, widgets, or libraries." - Douglas Crockford

## Anonymously scope JavaScript if you’re never going to call it elsewhere.
If you're writing a one-off chunk of JavaScript that never needs to be referred to by other code, it's wise to anonymously scope it so it won't get accidentally referenced elsewhere.
To do this, just wrap your code in an anonymous function closure:

```javascript
// An anonymous function that can never be referenced by name...
;(function(){
    var x = 123;
    console.log(x);
})(); // Call the anonymous function once, then throw it away!

console.log(x);
```

In the code above, the first `console.log()` will succeed, but the second will fail.  You won't be able to reference `x` outside of the anonymous function.

## Namespace your JavaScript if you need to refer to it elsewhere.
Your JavaScript shouldn't be floating off in the global namespace, where it collides with other stuff you've included.

Although JavaScript doesn't have built-in notions of namespaces, its object model is flexible enough that you can emulate them.  Here's an example:

```javascript
var MyNamespace = MyNamespace || {};

MyNamespace.MyModule = function()
{
    // Your module is now in a namespace!
}
```

## Applying both of these in a project

```javascript
// wrapping by an anonymous function that can never be referenced by name...
;(function(){
	'use strict';
	window.PROJ = window.PROJ || {}; // get shortname for your project for easy referencing, here PROJ is for Project

	//your actual function
	window.PROJ.someFunction = function () {

	};

})();
```

### why did you use window?
Simple answer: To make one global variable for a project.

Here, we want to reduce global variables of our project to only one and in this case it would be `PROJ`. All global JavaScript objects, functions, and variables automatically become members of the `window` object.
{: .notice}