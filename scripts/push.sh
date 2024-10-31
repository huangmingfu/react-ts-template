#!/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 获取提交描述信息
commitDescInfo=${1:-"feat: update"}  # 默认提交信息

git add .

# 判断提交描述信息是否为空
if [[ -z "${commitDescInfo}" ]]; then
  git commit -m "feat: update"
else
  git commit -m "${commitDescInfo}"
fi

git push
