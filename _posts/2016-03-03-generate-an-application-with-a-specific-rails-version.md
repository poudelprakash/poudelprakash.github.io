---
title: Generate an application with a specific Rails version
categories: rails
excerpt: Generate an application with a specific Rails version
tags:
  - rbenv
comments: true
share: true
toc: true
date: 2016-03-03T22:13:42+05:45
last_modified_at: 2017-08-24
---

There are few ways we can create an application with specific rails version.

In this article, we will create a new rails app of version `4.2.1` while our system may have multiple rails versions installed in our system.

Here is the list of rails versions that were already installed in my system while writing this article.

~~~ruby
rails (5.0.0.beta3, 5.0.0.beta2, 4.2.5.2, 4.2.5.1, 4.2.4, 4.2.1)
~~~

## Method 1: Common method

Let's start with most common and widely documented method:

```sh
 rails version new app_name
```

**Code example:**
Let's create an app named `my_app` with rails version `4.2.1`.

```sh
rails _4.2.1_ new my_app
```

Sometimes, this method does not work, I have not yet been able to identify reasons behind it. Please leave comment below if you know or have some assumptions on why this method fails sometimes. Several people have reported this method to be failing sometimes and they had been using latest/other version instead.
{: .notice}

## Method 2: Let bundler handle the rails version

In this method we will let `bundler` handle rails version.

Our workflow if we wanted to setup new project with rails version `4.2.1` would be:

### 2.1: Make new folder and initialise bundler

~~~bash
# make directory for new rails app
mkdir my_app
cd my_app

# specify ruby version we want to use
echo 2.4.1 > .ruby-version

# initialise bundler (creates Gemfile)
bundler init
~~~

### 2.2: Specify rails version

At this stage, our `Gemfile` probably looks like this:

~~~ruby
# A sample Gemfile
source "https://rubygems.org"

# gem "rails"
~~~

We have to uncomment rails gem and specify version so that our `Gemfile` looks like this:

~~~ruby
# A sample Gemfile
source "https://rubygems.org"

gem "rails", '4.2.1'
~~~

Now we need to run `bundle install`. (This would install `rails 4.2.1` if it had not been installed yet).

### 2.3: Initialise new rails app with specified rails version

At this point we already have minimal project with rails version `4.2.1`.

Now, we can use the rails command line tool with bundle exec to force the version:

~~~bash
bundle exec rails new . --force # --force to overrite curent Gemfile
~~~

If you were unaware about rails runtime option `force`, it is used to overwrite files that already exist. Just type `rails` in your commandline and you will see explanation about this command.

Now, we have new rails project with our desired rails version(`4.2.1`).

What do you think about this flow of setting up version specific new rails project? Feel free to comment.

Happy learning!

References:

1. <https://relativkreativ.at/articles/managing-multiple-rails-versions>
2. <https://coderwall.com/p/wrukbg/generate-an-application-with-a-specific-rails-version>
