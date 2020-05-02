{
    mode: 'development',
    bail: false,
    devtool: '#cheap-module-source-map',
    entry: [
      '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/core/dist/server/common/polyfills.js',
      '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/core/dist/server/preview/globals.js',
      '/Users/giraudflorent/workdir/opensource/vuemontreal/.storybook/preview.js',
      '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/webpack-hot-middleware/client.js?reload=true&quiet=true'
    ],
    output: {
      path: '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/core/dist/public',
      filename: '[name].[hash].bundle.js',
      publicPath: ''
    },
    plugins: [
      HtmlWebpackPlugin {
        options: [Object],
        childCompilerHash: undefined,
        assetJson: undefined,
        hash: undefined,
        version: 4
      },
      DefinePlugin { definitions: [Object] },
      WatchMissingNodeModulesPlugin {
        nodeModulesPath: '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules'
      },
      HotModuleReplacementPlugin {
        options: {},
        multiStep: undefined,
        fullBuildTimeout: 200,
        requestTimeout: 10000
      },
      CaseSensitivePathsPlugin {
        options: {},
        logger: [Object],
        pathCache: {},
        fsOperations: 0,
        primed: false
      },
      ProgressPlugin {
        profile: false,
        handler: undefined,
        modulesCount: 500,
        showEntries: false,
        showModules: true,
        showActiveModules: true
      },
      DefinePlugin { definitions: [Object] },
      NormalModuleReplacementPlugin {
        resourceRegExp: /core-js/,
        newResource: [Function]
      },
      VueLoaderPlugin {}
    ],
    module: {
      rules: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
    },
    resolve: {
      extensions: [ '.mjs', '.js', '.jsx', '.json', '.vue' ],
      modules: [ 'node_modules' ],
      alias: {
        'babel-runtime/core-js/object/assign': '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/@storybook/core/node_modules/core-js/es/object/assign.js',
        react: '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/react',
        'react-dom': '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/react-dom',
        'vue$': '/Users/giraudflorent/workdir/opensource/vuemontreal/node_modules/vue/dist/vue.esm.js'
      }
    },
    optimization: {
      splitChunks: { chunks: 'all' },
      runtimeChunk: true,
      minimizer: [ [TerserPlugin] ]
    },
    performance: { hints: false }
  }