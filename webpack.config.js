// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require('path');
const { WebpackSweetEntry } = require('@sect/webpack-sweet-entry');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = "style-loader";
const CopyPlugin = require("copy-webpack-plugin");
/*const globOptionsPromise = import('globby').then(({ Options }) => {
  const globOptions = Options;
  ignore: ["*.js", "*.ts", "*.jsx", "*.tsx", "*.css", "*.scss"]
});*/

const config = {
  entry: WebpackSweetEntry(path.resolve(__dirname, 'src/**/*.{js,ts,tsx,jsx}'), ['tsx', 'jsx', 'js', 'ts'], 'src'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  /*devServer: {
    open: true,
    host: "localhost",
    port: 5000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist/'),
    },
  },*/
  // Add your plugins here
  // Learn more about plugins from https://webpack.js.org/configuration/plugins/

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          to: "../dist/",
          context: "./src/",
          globOptions: {
            ignore: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "**/*.css", "**/*.scss"],
          },
        },
      ],
    }),
  ],

  module: {
    rules: [
      /*{
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },*/
      {
        test: /\.(js|ts|jsx|tsx)$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-typescript", '@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
        //include: path.resolve(_dirname, 'src'),
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(scss|sass)$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "src/[name].[ext]"
          }
        }
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    //mainFields: ['esnext', 'browser', 'module', 'main'],
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  //devtool: 'source-map',
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};