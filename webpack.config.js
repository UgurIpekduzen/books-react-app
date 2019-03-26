var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    output: {
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env',
                        '@babel/react',{
                        'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        },
        { 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [htmlPlugin]
  };