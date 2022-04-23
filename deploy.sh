#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:yuna2017/knowledgeBase.git
else
  msg='来自Github Action的自动部署'
  githubUrl=https://geekercai:${GITHUB_TOKEN}@github.com/yuna2017/knowledgeBase.git
  git config --global user.name "geekercai"
  git config --global user.email "cairunpeimail@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

