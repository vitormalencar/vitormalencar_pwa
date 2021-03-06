const { join } = require("path");
const ExtractText = require("extract-text-webpack-plugin");
const setup = require("./setup");

const dist = join(__dirname, "../dist");
const exclude = /(node_modules|bower_components)/;

module.exports = env => {
  const isProd = env && env.production;

  return {
    entry: {
      app: "./src/index.js",
      vendor: ["preact"]
    },
    output: {
      path: dist,
      filename: "[name].[hash].js",
      publicPath: "/"
    },
    resolve: {
      alias: {
        react: "preact/aliases",
        "react-dom": "preact/aliases"
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: exclude,
          loader: "babel-loader"
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "eslint-loader",
          include: /src/
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|webp)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        },
        {
          test: /\.(sass|scss)$/,
          loader: isProd
            ? ExtractText.extract({
                fallback: "style-loader",
                use: "css-loader!postcss-loader!sass-loader"
              })
            : "style-loader!css-loader!postcss-loader!sass-loader"
        }
      ]
    },
    plugins: setup(isProd),
    devtool: !isProd && "eval",
    devServer: {
      contentBase: dist,
      port: process.env.PORT || 9000,
      historyApiFallback: true,
      compress: isProd,
      inline: !isProd,
      hot: !isProd
    }
  };
};
