#!/bin/bash
# Create a new foundation project with a specific version, usage: foundation_create_git project_name 3.2.5 
# use `bundle exec compass watch` while working on your project
# make sure you install the proper gem first with, `gem install zurb-foundation --version 3.2.5 
mkdir $1
cd $1
touch Gemfile
echo "source \"https://rubygems.org\"" >> Gemfile
echo "gem \"zurb-foundation\", \"$2\"" >> Gemfile
echo "gem \"compass\"" >> Gemfile
bundle install
bundle exec compass create . -r zurb-foundation --using foundation
