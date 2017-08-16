var path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'build/index.js'
  },  
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        loader: 'babel-loader',
        include: path.resolve(__dirname, "app"),
        query:
        {
          presets:['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
