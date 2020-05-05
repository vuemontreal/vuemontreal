const { getWebpackConfig } = require('nuxt')

module.exports = {
    stories: ['../components/**/*.stories.js'],
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-knobs/register',
    ],
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    webpackFinal: async (sbWebpack, { configType }) => {

        const nuxtWebpack = await getWebpackConfig('client', {
            for: process.env.NODE_ENV === 'production' ? 'build' : 'dev'
        })

        const recomposedWebpackConfig = {
            mode: nuxtWebpack.mode,
            devtool: nuxtWebpack.devtool,
            entry: sbWebpack.entry,
            output: sbWebpack.output,
            bail: sbWebpack.bail,
            module: {
                rules: [
                    ...nuxtWebpack.module.rules.map(el => {
                        const reg = RegExp(el.test);
                        if (reg.test(".postcss") || reg.test(".css")) {
                            el.oneOf = el.oneOf.map(e => {
                                e.use.push({
                                    loader: 'postcss-loader',
                                    options: {
                                        ident: 'postcss',
                                        plugins: [
                                        require('tailwindcss')('./tailwind.config.js'),
                                        require('autoprefixer'),
                                        ],
                                    },
                                })
                                return e;
                            })
                        }
                        return el;
                    })
                ]
            },
            plugins: sbWebpack.plugins,
            resolve: {
                extensions: nuxtWebpack.resolve.extensions,
                modules: nuxtWebpack.resolve.modules,
                alias: {
                    ...nuxtWebpack.resolve.alias,
                    ...sbWebpack.resolve.alias,
                },
            },
            optimization: sbWebpack.optimization,
            performance: {
                ...sbWebpack.performance,
                ...nuxtWebpack.performance
            }
        }

        return recomposedWebpackConfig;
    },
};