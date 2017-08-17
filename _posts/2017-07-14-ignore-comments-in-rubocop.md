---
title: How to make rubocop ignore comments using regex
modified:
categories: ruby
excerpt: How to make rubocop ignore comments using regex
tags: rubocop
comments: true
share: true
date: 2017-07-14T23:24:12+05:45
last_modified_at: 2017-09-17T23:24:12+05:45
---

It's possible to define regex patterns to automatically ignore certain lines in rubocop.yml,
so you could choose to ignore all lines starting with a # character:

```ruby
Metrics/LineLength:
  Max: 80
  IgnoredPatterns: ['\A#']
```

Reference: <https://stackoverflow.com/a/42833040/4096120>
