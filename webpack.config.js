const path = require ('path');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'watch-props.js',
    path: path.resolve (__dirname, 'dist'),
    libraryTarget: "umd",
    library: ['watchProps'],
  },
  externals: [
    { react: { commonjs: "react", commonjs2: "react",amd: 'react', root: ['React'] } },
  ]
};
