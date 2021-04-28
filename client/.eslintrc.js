module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: ['react-app', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    root: true,
    rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
        'prettier/prettier': 2,
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }]
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json'
            }
        },
        react: {
            version: "detect"
          }
    }
};
