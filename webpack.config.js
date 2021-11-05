const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isEnvProd = () => process.env.NODE_ENV === 'production';

const getScssLoader = () => 
    !isEnvProd() ?
        "style-loader" :
        MiniCssExtractPlugin.loader;

const getAssetFilename = (name, ext = 'js', minify = false) => {
    return isEnvProd() && minify ? `${name}.min.${ext}` : `${name}.${ext}`;
}

module.exports = {
    devtool: isEnvProd() ? false : 'inline-source-map',
    output: {
        filename: getAssetFilename('js/[name]'),
        path: path.resolve(__dirname, 'dist/assets')
    },
    entry: {
        main: './src/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    getScssLoader(),
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: getAssetFilename('css/[name]', 'css', true),
        })
    ],
    watchOptions: {
        ignored: ["**/node_modules"],
        poll: 1000,
        aggregateTimeout: 100,
    },
}