// const envConfig = require('./config/EnvConfig');

module.exports = {
  entry: {
    reports: ["./src/index.js"],
  },
  output: {
    path: require("path").join(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["url-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
  },
  mode: "development",
  devServer: {
    // proxy: {
    //     '/bbreports/*': {
    //         target: envConfig.domain,
    //         secure: false,
    //     },
    //     '/lookup/*': {
    //         target: envConfig.domain,
    //         secure: false,
    //     },
    // },
    overlay: true,
    hot: true,
    port: 2021,
    watchOptions: {
      poll: true,
    },
    historyApiFallback: true,
    contentBase: "./public",
  },
  plugins: [],
};
