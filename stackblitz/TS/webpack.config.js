const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const glob = require('glob');

module.exports = {
    entry: glob.sync('./src/*.ts'),
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.html'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        ...addHtmlPlugins(),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
        open: true,
    },
};

function addHtmlPlugins() {
    const htmlFiles = glob.sync('./src/app/*.html');
    const plugins = [];

    for (const file of htmlFiles) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: `${file.split('/').pop().split('.')[0]}.html`,
                template: file,
            })
        );
    }

    return plugins;
}