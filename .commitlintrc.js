/** @type {import("@commitlint/types").UserConfig} */
export default { extends: ['@commitlint/config-conventional'] }; // 继承 @commitlint/config-conventional 配置，即使用常规的 Commit 规范。

/**
 * 遵循 Angular 团队提出的 Conventional Commits 规范：
 *
 * feat：新功能（feature）
 * fix：修复 bug
 * docs：文档更改
 * style：样式
 * refactor：重构（既不是新功能也不是修复 bug 的代码改动）
 * perf：优化
 * test：增加测试
 * chore：构建过程或辅助工具的变动
 * ci：持续集成相关配置的更改
 * build：影响构建系统或外部依赖的更改
 * revert：回滚到上一个版本
 */
