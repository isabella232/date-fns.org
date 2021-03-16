import { getPath, getConfig } from './utils/webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { Configuration, HotModuleReplacementPlugin } from 'webpack'

const config: Configuration = getConfig({
  entry: getPath('src/web/index.tsx'),
  output: {
    filename: 'script.js',
    path: getPath('build/web/static'),
    publicPath: '/static/',
  },
  target: 'web',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: getPath('src/static') }],
    }),
    new HotModuleReplacementPlugin(),
  ],
})

export default config
