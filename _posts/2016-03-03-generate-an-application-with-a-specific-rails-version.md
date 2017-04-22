---
title: Generate an application with a specific Rails version
modified: 2016-05-08
categories: rails 
excerpt: Generate an application with a specific Rails version
tags:
  - rbenv
comments: true
share: true
date: 2016-03-03T22:13:42+05:45
---

{% include toc %}

Today is one of those days for me, when code I have known and been using for months suddenly stopped behaving the way it used to. I have been `rvm` user and setting up new rails project with specific version had always been simple like `rails _4.2.1_ new myapp` where `4.2.1` would be my desired version.

But today, no matter what version I specified, I would end up with new rails app of version `5.0.0.beta3`. After trying the same code 2-3 times with different rails versions, I lost confidence in the code I used to run!

UPDATE: on trying to do `rails _4.2.6_ new myapp` on May-8-2016, it worked perfectly. The method mentioned below is here for educational purpose as one of the ways to generate version specific rails project but long and not preferred.
{: .notice} 

Something had changed! I am `rbenv` user now. I had switched to `rbenv` with promise that I would let `rbenv` manage my ruby versions and let `bundler` manage gems. Above code must have worked in previous occasions all thanks to magics of `rvm`.

So probably, I should let `bundler` handle which rails versions I should use.

Here is the list of rails versions currently installed in my system.

~~~ruby
rails (5.0.0.beta3, 5.0.0.beta2, 4.2.5.2, 4.2.5.1, 4.2.4, 4.2.1)
~~~

So, my new workflow if I wanted to setup new project with rails version `4.2.5.2` would be:

## Make new folder and initialise bundler

~~~bash
# make directory for my new rails app
mkdir app
cd app

# specify ruby version I want to use
echo 2.4.0-dev > .ruby-version

# initialise bundler (creates Gemfile)
bundler init
~~~

## Specify rails version

Currently my Gemfile looks like this:

~~~ruby
# A sample Gemfile
source "https://rubygems.org"

# gem "rails"
~~~

I have to uncomment rails gem and specify version, `Gemfile` now should look like this:

~~~ruby
# A sample Gemfile
source "https://rubygems.org"

gem "rails", '4.2.5.2'
~~~

Now I need to run `bundle install`. This would install `rails 4.2.5.2` if it had not been installed yet.

## Initialise new rails app with specified rails version

At this point I have minimal project with rails version `4.2.5.2`. Now, I can use the rails command line tool with bundle exec to force the version:

~~~bash
bundle exec rails new . --force # --force to overrite curent Gemfile
~~~

Now, I have new rails project with my desired rails version. Few months ago, I would have find this to be some lengthy process and going back to `rvm` might have been prompt decision. But today, strangely I love this flow.

What do you think about this flow of setting up version specific new rails project? Feel free to comment.

Happy learning!

References:

1. <https://relativkreativ.at/articles/managing-multiple-rails-versions>
2. <https://coderwall.com/p/wrukbg/generate-an-application-with-a-specific-rails-version>
