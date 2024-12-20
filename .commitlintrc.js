/** @type {import("@commitlint/types").UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'], // 继承使用常规的 Commit 规范。
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能(feature)
        'fix', // 修补bug
        'docs', // 文档(documentation)
        'style', // 格式、样式(不影响代码运行的变动)
        'refactor', // 重构(即不是新增功能，也不是修改BUG的代码)
        'perf', // 优化相关，比如提升性能、体验
        'test', // 添加测试
        'ci', // 持续集成修改
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
        'build', // 影响构建系统或外部依赖的更改
        /** 以下为自定义，以上（Angular 团队提出的 Conventional Commits 规范，即@commitlint/config-conventional插件配置） */
        'workflow', // 工作流改进
        'mod', // 不确定分类的修改
        'wip', // 开发中
        'types', // 类型修改
        'release', // 版本发布
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
