#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 获取提交描述信息，默认为 "feat: update"
commitDescInfo=${1:-"feat: update"}

git add .
git commit -m "${commitDescInfo}"
git push

# 使用示例：
# pnpm push "feat: 添加新功能"
# 或者 pnpm push 走默认提交描述信息
