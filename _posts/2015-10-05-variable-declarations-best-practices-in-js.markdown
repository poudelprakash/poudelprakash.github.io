---
layout: single
title: Variable Declarations Best Practices in Js
categories: javascript
excerpt: best practices in js compiled from various sources like airbnb and jshint
tags: js best practices
author:
comments: true
share: true
date: 2015-10-05T22:21:08+05:45
---

{% include toc %}

## Don't declare variable twice

```javascript
// bad: declaring variable twice
function test() {
    "use strict";
    var a = 1,
    	a = 2;
}

/*this will probably make your program not work as expected,
this can be fixed by renaming one of them
*/
function test() {
    "use strict";
    var a = 1,
        b = 2;
}
```

Read more about it: [already defined variable(jshint)](https://jslinterrors.com/a-is-already-defined){: rel="nofollow"}{:target="_blank"}

## References

### Use const for all of your references; avoid using var

Why? This ensures that you can't reassign your references (mutation), which can lead to bugs and difficult to comprehend code.

```javascript
// bad
var a = 1,
    b = 2;

// good
const a = 1,
      b = 2;

```

### If you must mutate references, use let instead of var

Why? let is block-scoped rather than function-scoped like var.

```javascript
  // bad
  var count = 1;
  if (true) {
    count += 1;
  }

  // good, use the let.
  let count = 1;
  if (true) {
    count += 1;
  }
```

### Note that both let and const are block-scoped

```javascript
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError

```


Read more about references: [js best practices](https://github.com/airbnb/javascript#references){: rel="nofollow"}{:target="_blank"}

## Use the literal syntax for array creation

```javascript
// bad
const items = new Array();

// good
const items = [];

```

Read more about it: [js array best practices](https://github.com/airbnb/javascript#arrays){: rel="nofollow"}{:target="_blank"}

## Use the literal syntax for object creation.

```javascript
// bad
const item = new Object();

// good
const item = {};
```

Read more about it: [js object best practices](https://github.com/airbnb/javascript#objects){: rel="nofollow"}{:target="_blank"}
