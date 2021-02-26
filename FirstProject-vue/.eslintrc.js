// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    "eslint-config-alloy"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    'vue/no-parsing-error': [2, {
      "x-invalid-end-tag": false
    }]
  }
}
