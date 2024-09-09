module.exports = {
  ignoreFiles: ['**/*.js'],
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-tailwindcss',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'order/order': [
      'custom-properties',
      'declarations'
    ]
  }
}
