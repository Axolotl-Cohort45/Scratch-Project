const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: 'production',
  // mode: 'development',
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    // port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: "Development",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"], //-> include sass-loader if using sass
      },
    ],
  },
};

//    "start": "webpack-dev-server --mode development --open --hot",
//"build": "webpack --mode production"
//"dev": "webpack-dev-server --mode development --open --hot"
