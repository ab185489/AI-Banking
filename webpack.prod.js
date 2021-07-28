const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanOptions = {
    root: __dirname,
    verbose: true,
    dry: false,
    exclude: [],
};

module.exports = {
    entry: {
        reports: ['./src/index.js'],
    },
    output: {
        path: require('path').join(__dirname, 'dist'),
        publicPath: './',
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    devtool: false,
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(cleanOptions),
        new HtmlWebpackPlugin({
            title: 'Reports',
        }),
    ],
};
