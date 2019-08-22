#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd blog/.vuepress/dist

# if you are deploying to a custom domain
echo 'vuemontreal.org' > CNAME

git init
git add -A
git commit -m 'deploy vuepress montreal blog'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vuemontreal/vuemontreal.git master:gh-pages

cd -