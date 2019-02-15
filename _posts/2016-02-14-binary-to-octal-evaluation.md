---
title: Binary to Octal Evaluation
categories: ruby
excerpt: binary to octal evaluation
tags:
  - ruby
comments: true
share: true
date: 2016-02-14T13:30:31+05:45
---

This is another thing I learned while watching ruby-tapas video on binary literals. Length of the video was 1m:47s only and I am already writing second blog about the learnings from there!

In this post, we will see binary to octal conversion as shown in the video.

```ruby
# U  G  O
# rwxrwxrwx
0b111101101

perms = 0b111101101
perms.to_s(8) # => "755"
```

I will surely add other ways of achieving the same as I find in future. I know you are another wise rubyist there, feel free to share your knowledge in the comments below.

Happy Learning! :)
