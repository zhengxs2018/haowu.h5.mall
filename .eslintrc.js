
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'no-console': isDev ? 'off': 'error',
    'no-debugger': isDev ? 'off': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
