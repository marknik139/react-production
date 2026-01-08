module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended'
    ],
    overrides: [
        {
            env: {
                'node': true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',

        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false
                }
            }
        ],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',

        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn'
    }
}
