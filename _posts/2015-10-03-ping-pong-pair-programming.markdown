---
layout: single
title: "Ping Pong Pair Programming"
categories:
excerpt: An ExtremeProgrammingPractice in which two engineers participate in one development effort at one workstation. Each member performs the action the other is not currently doing.
tags:
comments: true
share: true
date: 2015-10-03T14:37:57+05:45
---

## Pair Programming

![Pair Programming]({{ "/assets/images/posts/pair-programming.jpg" | absolute_url }}){: .align-right}

Pair programming is an *extreme programming practice* in which two engineers participate in one development effort at one workstation. Each member performs the action the other is not currently doing.

## Ping Pong Pattern
This is an example flow for ping pong pair programming:

* A writes a new test and sees that it fails.
* B implements the code needed to pass the test.
* B writes the next test and sees that it fails.
* A implements the code needed to pass the test.

### Ping Pong Pattern as tool to practice TDD

I think Ping Pong pair programming can be most effectively used to learn TDD. Main challenge faced by any developer while learning TDD is his need to re-orient the way he solves problem. For TDD one has to analyse what to test rather than how to fix the problem.

Applying ping pong pattern, one developer will write test cases and push it in one branch, his partner will pull that and test branch and write code to pass the test. Then the one who wrote test can verify/qa the feature.

That's only half cycle of ping pong yet. <br />Full cycle will go like: each developer will write test for their partners. They switch the feature and write code to pass the test cases.

Developing in this way also helps everyone in the team have better overall understanding of the software.