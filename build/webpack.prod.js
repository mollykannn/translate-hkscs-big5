const { merge } = require("webpack-merge");
const commomConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: {
          loader: "image-webpack-loader",
        },
      },
    ],
  },
};
module.exports = merge(commomConfig, prodConfig);
