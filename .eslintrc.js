module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    extends: ['plugin:nuxt/recommended', 'plugin:vue/vue3-essential', 'prettier'],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['typescript']
            }
        }
    },
    plugins: ['prettier'],
    ignorePatterns: ['**/public/**', '**/dist/**'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-fallthrough': 'off',
        'vue/this-in-template': ['error', 'never'],
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        'vue/require-explicit-emits': [
            'error',
            {
                allowProps: false
            }
        ],
        'vue/attributes-order': [
            'error',
            {
                order: ['CONDITIONALS', 'LIST_RENDERING', 'DEFINITION', ['UNIQUE', 'SLOT'], 'RENDER_MODIFIERS', 'GLOBAL', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', ['OTHER_ATTR', 'EVENTS'], 'CONTENT'],
                alphabetical: false
            }
        ],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    'extends',
                    'mixins',
                    ['delimiters', 'comments'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    'emits',
                    'setup',
                    'fetch',
                    'head',
                    ['props', 'propsData'],
                    ['provide', 'inject'],
                    'asyncData',
                    'data',
                    'watch',
                    'watchQuery',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'computed',
                    ['components', 'directives', 'filters'],
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
            { blankLine: 'any', prev: 'case', next: 'case' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: ['import'], next: ['const', 'let', 'var'] }
        ]
    }
};
