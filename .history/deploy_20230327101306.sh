
#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# git push -f git@github.com:JosueCastro06/turing_machine.git main:gh-pages
