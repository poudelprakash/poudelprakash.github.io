---
layout: single
title: Continuous Integration, Delivery and Deployment
modified:
categories:
excerpt: difference between continuous integration, continuous delivery and continuous deployment
tags:
comments: true
share: true
date: 2015-10-05T20:50:47+05:45
---

## Continuous Integration

Continuous Integration (CI) is a development practice where developers integrate code into a shared repository frequently. While automated testing is not strictly part of CI it is typically implied.

**Example:**
*Suppose there is a dev branch where all the features get merged before they are moved to master(production branch), then integrating code into this dev branch frequently is continuous integration.*
{: .notice}

This helps:

1. catch issues early
2. prevent "integration hell"

>Continuous Integration doesn’t get rid of bugs, but it does make them dramatically easier to find and remove. - Martin Fowler

## Continuous Delivery

Continuous delivery is the practice of delivery of code to an environment, whether it is a QA team or customers, so they can review it. After the changes get approved, they can land in production.

## Continuous Deployment

Continuous deployment is closely related to Continuous Integration and refers to keeping your application deployable at any point or even automatically releasing to a test or production environment if the latest version passes all automated tests.

## Continuous Delivery vs Continuous Deployment

![Continuous Delivery vs Continuous Deployment processes]({{ "/assets/images/posts/continuous-delivery-deployment-sm.jpg" | absolute_url }})

References:

- <https://blog.risingstack.com/continuous-deployment-of-node-js-applications/>{: rel="nofollow"}{:target="_blank"}
- <https://codeship.com/continuous-integration-essentials>{: rel="nofollow"}{:target="_blank"}
- photo-credit: <http://blog.crisp.se/2013/02/05/yassalsundman/continuous-delivery-vs-continuous-deployment>{: rel="nofollow"}{:target="_blank"}