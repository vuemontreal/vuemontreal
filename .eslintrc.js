module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  "overrides": [
    {
      "files": ["bin/*.js", "lib/*.js"],
      "excludedFiles": "*.css",
    }
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'prettier/prettier': ['error'],
  }
}
