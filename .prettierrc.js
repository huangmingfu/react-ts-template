/** @type {import("prettier").Config} */
export default {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为2
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: true, // 行尾是否使用分号
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  quoteProps: 'as-needed', // 对象键值对中的字符串是否需要加引号
  bracketSpacing: true, // 对象大括号之间是否有空格，默认为true，效果：{ foo: bar }
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值："none", "es5", "all"
  jsxSingleQuote: false, // JSX 中的字符串是否使用单引号
  arrowParens: 'always', // 箭头函数参数是否总是使用括号
  insertPragma: false, // 是否在文件顶部插入@format注释
  requirePragma: false, // 是否仅在文件中有@format注释时才格式化
  proseWrap: 'never', // 长文本是否自动换行
  htmlWhitespaceSensitivity: 'strict', // HTML中的空白字符敏感度
  endOfLine: 'auto', // 文件末尾的换行符
  rangeStart: 0 // 格式化的起始位置
};
