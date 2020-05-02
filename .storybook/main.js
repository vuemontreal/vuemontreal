const path = require('path');
const { getWebpackConfig } = require('nuxt')

// function isObject(item) {
//     return (item && typeof item === 'object' && !Array.isArray(item));
//   }
  
// function mergeDeep(target, ...sources) {
//     if (!sources.length) return target;
//     const source = sources.shift();
  
//     if (isObject(target) && isObject(source)) {
//       for (const key in source) {
//         if (isObject(source[key])) {
//           if (!target[key]) Object.assign(target, { [key]: {} });
//           mergeDeep(target[key], source[key]);
//         } else {
//           Object.assign(target, { [key]: source[key] });
//         }
//       }
//     }
  
//     return mergeDeep(target, ...sources);
//   }

module.exports = {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    webpackFinal: async (sbWebpack, { configType }) => {

        const nuxtWebpack = await getWebpackConfig('client', {
            for: process.env.NODE_ENV === 'production' ? 'build' : 'dev'
        })

        const recomposeWebpackConfig = {
            mode: nuxtWebpack.mode,
            devtool: nuxtWebpack.devtool,
            // optimization: nuxt.webpack.optimization,
            entry: sbWebpack.entry,
            output: sbWebpack.output,
            bail: sbWebpack.bail,
            module: {
                rules: [
                    ...nuxtWebpack.module.rules,
                    ...sbWebpack.module.rules
                ]
            },
            plugins: [
                // ...nuxtWebpack.plugins,
                ...sbWebpack.plugins,
            ],
            resolve: {
                extensions: [
                    ...nuxtWebpack.resolve.extensions,
                    ...sbWebpack.resolve.extensions,
                ],
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

        return recomposeWebpackConfig;
    },
};