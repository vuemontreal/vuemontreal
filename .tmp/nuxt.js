{
    name: 'client',
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    optimization: {
      runtimeChunk: 'single',
      minimize: false,
      minimizer: undefined,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: [Object]
      }
    },
    output: {
      path: '/Users/giraudflorent/workdir/opensource/vuemontreal/.nuxt/dist/client',
      filename: '[name].js',
      futureEmitAssets: true,
      chunkFilename: '[name].js',
      publicPath: '/_nuxt/'
    },
    performance: { maxEntrypointSize: 1024000, hints: false },
    module: {
      rules: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object]
      ]
    },
    plugins: [
      TimeFixPlugin { watchOffset: 11000 },
      VueLoaderPlugin {},
      WarningIgnorePlugin { filter: [Function] },
      WebpackBarPlugin {
        profile: false,
        handler: [Function],
        modulesCount: 500,
        showEntries: false,
        showModules: true,
        showActiveModules: true,
        options: [Object],
        reporters: [Array]
      },
      HtmlWebpackPlugin { options: [Object] },
      HtmlWebpackPlugin { options: [Object] },
      VueSSRClientPlugin { options: [Object] },
      DefinePlugin { definitions: [Object] },
      HotModuleReplacementPlugin {
        options: {},
        multiStep: undefined,
        fullBuildTimeout: 200,
        requestTimeout: 10000
      },
      FriendlyErrorsWebpackPlugin {
        compilationSuccessInfo: {},
        onErrors: undefined,
        shouldClearConsole: false,
        logLevel: 1,
        formatters: [Array],
        transformers: [Array],
        previousEndTimes: {},
        reporter: [ConsolaReporter]
      }
    ],
    resolve: {
      extensions: [ '.wasm', '.mjs', '.js', '.json', '.vue', '.jsx' ],
      alias: {
        '~~': '/Users/giraudflorent/workdir/opensource/vuemontreal',
        '@@': '/Users/giraudflorent/workdir/opensource/vuemontreal',
        '~': '/Users/giraudflorent/workdir/opensource/vuemontreal',
        '@': '/Users/giraudflorent/workdir/opensource/vuemontreal',
        assets: '/Users/giraudflorent/workdir/opensource/vuemontreal/assets',
        static: '/Users/giraudflorent/workdir/opensource/vuemontreal/static',
        'vue-meta': '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/vue-meta/dist/vue-meta.esm.browser.js'
      },
      modules: [
        'node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/vue/bin/node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/vue/node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules',
        '/Users/giraudflorent/workdir/opensource/node_modules',
        '/Users/giraudflorent/workdir/node_modules',
        '/Users/giraudflorent/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    },
    resolveLoader: {
      modules: [
        'node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/vue/bin/node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/vue/node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/node_modules',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules',
        '/Users/giraudflorent/workdir/opensource/node_modules',
        '/Users/giraudflorent/workdir/node_modules',
        '/Users/giraudflorent/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    },
    entry: {
      app: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true&timeout=30000&ansiColors=&overlayStyles=&name=client&path=/__webpack_hmr/client',
        '/Users/giraudflorent/workdir/opensource/vuemontreal/.nuxt/client.js'
      ]
    }
  }