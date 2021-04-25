module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended', 
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint', 
        'import', 
        'prettier', 
        'sort-keys-fix'
    ],
    root: true,
    rules: {
        'import/order': [
            'error',
            {
                'alphabetize': {
                    'order': 'asc'
                },
                'groups': [['builtin', 'external'], 'internal', 'object'],
                'newlines-between': 'always'
            }
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'prettier/prettier': 2,
        'sort-keys-fix/sort-keys-fix': 'error'
    }
};
