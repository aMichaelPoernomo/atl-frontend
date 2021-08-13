const path = require('path')
const CracoAlias = require('craco-alias')

module.exports = {
  eslint: {
    enable: true,
    mode: 'extends',
  },
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.((jsx?)|(tsx?))$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'webpack-remove-block-loader',
                options: { active: process.env.NODE_ENV === 'production' },
              },
            ],
          },
        ],
      },
    },
  },
  babel: {
    plugins: ['babel-plugin-react-remove-properties'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: './',
        aliases: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@containers': './src/containers',
          '@epics': './src/epics',
          '@models': './src/models',
          '@reducers': './src/reducers',
          '@translations': './src/translations',
          '@utils': './src/utils',
        },
      },
    },
  ],
}
