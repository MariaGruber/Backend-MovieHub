// @ts-check

const eslint = require('@eslint/js')
const { configs, config } = require('typescript-eslint')

module.exports = config(
    eslint.configs.recommended,
    ...configs.recommended,
    ...configs.strictTypeChecked,
    ...configs.recommendedTypeChecked,
    {
        files: ['**/*.ts']
    },
);
