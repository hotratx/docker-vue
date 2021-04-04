module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    "^@validations": "<rootDir>/src/@core/utils/validations/validations.js",
    "^@core/(.*)$": "<rootDir>/src/@core/$1",
    "^@themeConfig": "<rootDir>/themeConfig.js"
  },
  transformIgnorePatterns: [
    '<roodDir>/node_modules/(?!vee-validate/dist/rules)',
  ],
}
