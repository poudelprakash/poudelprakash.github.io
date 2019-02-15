#!/usr/bin/env bash
open_blog_in_browser(){

blog_url="http://localhost:4000"

case "$OSTYPE" in
  darwin*)  open $blog_url ;;
  linux*)   xdg-open $blog_url ;;
  msys*)    explorer $blog_url ;;
esac

}

bundle exec jekyll serve --config _config.yml,_config.dev.yml & open_blog_in_browser

# Ref:
# 1. detect os: https://stackoverflow.com/a/18434831
# 2. mmistakes dev config serve: https://mademistakes.com/articles/using-jekyll-2016/
# 3. open site from cli in windows: https://stackoverflow.com/a/23039509
