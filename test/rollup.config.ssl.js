import serve from '../src/index'

export default {
  entry: 'entry.js',
  dest: 'dest.js',
  plugins: [
    serve({
      historyApiFallback: true,
      contentBase: ['.', 'base1', 'base2'],
      ssl: true,
    })
  ]
}
