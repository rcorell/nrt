module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint', 'import', 'prettier', 'sort-keys-fix'],
    root: true,
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_.*' }],
        '@typescript-eslint/no-use-before-define': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc'
                },
                groups: ['builtin', 'external', 'internal'],
                'newlines-between': 'always'
            }
        ],
        'prettier/prettier': 2,
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'sort-keys-fix/sort-keys-fix': 'error'
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json'
            }
        },
        react: {
            version: 'detect'
        }
    }
};
