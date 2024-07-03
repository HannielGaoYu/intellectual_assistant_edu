/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  'eslint.lintTask.enable': true,
  'eslint.alwaysShowStatus': true,
  'eslint.validate': [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact'
  ],
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true
  }
}
