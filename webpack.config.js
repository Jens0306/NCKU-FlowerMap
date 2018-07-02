var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  mode: 'production',
  entry : path.resolve(__dirname, 'src/client/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: '/dist'
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              //presets: ["es2015", "stage-3"]
              //presets: ["env"]
              "presets": [
                ["env", {
                  "targets": { node: "6" }, // specify targets here
                }]
              ]
            }
            //exclude: /node_modules/
          }
        ]
      },
      ///*
      {
          type: 'javascript/auto',
          test: /\.json$/,
          use: [
              {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]"
                }
              }
          ]
      },
      //*/
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          //'file-loader',
          {
            loader: 'file-loader',
            options: {
              //bypassOnDebug: true
              name: '[name].[ext]',
              outputPath: 'imgs/',
              publicPath: 'imgs/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    ///*
    new CopyWebpackPlugin(
      [
        {from: './src/client/json', to: './json'}
      ],
      { ignore: [ '*.js'] }
    )
    //*/
  ]
};
