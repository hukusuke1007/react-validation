const rewired = require('react-app-rewired')
const path = require('path')

function rewireTsLoader(config) {
  // config.module.rules.forEach((d) => {
  //   console.log('rogloae', d)
  // })
  config.module.rules.push(
    {
      oneOf: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: path.resolve(__dirname, './src'),
          exclude: /node_modules/,
          use: [{
            loader: 'ts-loader'
          }]
        }
      ]
    }
  )
  return config
}

module.exports = {
  // 開発サーバーのカスタマイズポイント
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      // デフォルト設定の開発サーバーを作成する
      const config = configFunction(proxy, allowedHost)

      // この辺でカスタマイズする

      return config
    }
  },
  // `npm test`のカスタマイズポイント
  jest: function (config) {

    // この辺でカスタマイズする

    return config
  },
  // webpack.configのカスタマイズポイント
  webpack: function (config, env) {
    // この辺でカスタマイズする
    config = rewireTsLoader(config)
    return config
  },
}