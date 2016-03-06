var path = require('path');

module.exports = {
  entry: './app/client/router',
  output: {
    filename: 'build/index.js'
  },  
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        loader: 'babel',
        include: path.resolve(__dirname, "app")
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
