#!/bin/bash
# Create a new foundation project from git, usage: foundation_create_git project_name git_url
# use `bundle exec compass watch` while working on your project
mkdir $1
cd $1
touch Gemfile
echo "source \"https://rubygems.org\"" >> Gemfile
echo "gem \"zurb-foundation\", :git => \"$2\"" >> Gemfile
echo "gem \"compass\"" >> Gemfile
bundle install
bundle exec compass create . -r zurb-foundation --using foundation
