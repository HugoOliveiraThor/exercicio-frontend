const path = require('path'); // O window pode não reconhecer a barra

module.exports = {
  entry:['@babel/polyfill',path.resolve(__dirname, 'src', 'index.js')], // Diretório em que ele está, cada virgula é como se fosse uma barra
  output: {
     path: path.resolve(__dirname, 'public'),
     filename: 'bundle.js' 
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader:'babel-loader'
      } 
      },
      {
      test: /\.scss$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'}
      ]
      },
      {
      test: /.*\.(gif|png|svg|jpe?g)$/i,
      use: [
        {loader:'file-loader',
        options: {
          name:'assets/img/[hash]-[name].[ext]'
        }
      }
      ]
      }
    ]
  }
};