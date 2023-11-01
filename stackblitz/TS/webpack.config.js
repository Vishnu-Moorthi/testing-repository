const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const glob = require('glob');

module.exports = {
    entry: glob.sync('*.ts').map((str) => './' + str),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
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
        filename: 'bundle.js'
    },
    plugins: [
        ...addHtmlPlugins(),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
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