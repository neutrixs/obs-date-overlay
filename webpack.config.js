const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = function(env,argv){
    console.log(argv)
    return config(argv.mode === 'development' ? 'development' : 'production')
}

const config = (devMode)=>({
    mode:devMode,
    entry: './src/index.tsx',
    output: {
        filename:"assets/[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            publicPath: '/'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[contenthash].css'
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        static: './dist',
        historyApiFallback: true,
        hot: false
    }
})