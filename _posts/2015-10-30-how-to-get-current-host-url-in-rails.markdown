---
title: How to Get Current Host Url in Rails
categories: rails
excerpt: how to get root url along with port number in rails
tags:
comments: true
share: true
image:
  feature:
date: 2015-10-30T13:58:12+05:45
---

You are in right place if you want to get root url along with port number in rails.

## Code that works

This can be achieved by either `root_url` or `request.env[HTTP_HOST]`.

## Use Case

In applications you may need to generate url that will link back to your application while sending email.

## Problems it has solved:

Previously, we used to have environment variable like `HOST: localhost:3000` saved in `application.yml` which would be later called by `ENV['HOST']`.

This would lead to error when I would run server in some other port than default(3000).
