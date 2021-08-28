module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // 'eslint:recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    "space-before-function-paren": ["error", {
      "anonymous": "ignore", // 用于匿名函数表达式（例如function () {}）ignore never always
      "named": "ignore", // 用于命名函数表达式（例如function foo () {}
      "asyncArrow": "always" // 用于异步箭头函数表达式（例如async () => {}）
    }],
    "prefer-const": ["off", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    'eqeqeq': 'off', // === 全等
    'camelcase': 'off', // 驼峰
    'dot-notation': 'off', // 对象属性用点替代中括号
    'no-labels': 'off', // 只要遇到带标签的语句以及每次break或continue使用标签时
    // 'import/no-duplicates': 'off' // import vant使用了多行
    // 'object-curly-spacing': 'always' // 大括号内的空格
  }
}
