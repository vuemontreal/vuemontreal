#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd ./dist

git init
git add -A
git commit -m 'deploy vuepress montreal blog'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vuemontreal/vuemontreal.git master:gh-pages

cd -
