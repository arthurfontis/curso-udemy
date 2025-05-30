const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimize: !modoDev,
        minimizer: [
            '...', 
            new CssMinimizerPlugin()
        ]
    }
    plugins: [
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtractPlugin.loader, // extrai o arquivo css

                // 'style-loader', //adiciona css a dom injetando a tag <style>

                'css-loader', //interpretar @imports, url()...

                'sass-loader'
            ]
        }]
    }
}