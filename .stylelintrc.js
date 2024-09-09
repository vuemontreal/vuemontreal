module.exports = {
  ignoreFiles: ['**/*.js'], // required for lint-staged not to mess with js files
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
