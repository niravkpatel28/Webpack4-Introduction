const path = require('path')
const { CleanWebpackPlugin } =require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        // filename:'bundle.[contenthash].js',
        filename: 'bundle.[contenthash].js',
        path: path.join(__dirname,'dist'),
        // publicPath: path.join(__dirname,'dist')
        // publicPath:'./dist/' // incase we are not building html file automatically 
        publicPath:'' // for building html file using plugin
    },
    module:{
        rules:[
            {test: /\.(png|jpg)$/, use: 'file-loader'},
            {
                test: /\.css$/, 
                // use: ['style-loader','css-loader']
                use:
                [
                   {
                    loader:MiniCssExtractPlugin.loader,
                   },
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'style.[contenthash].css',
            publicPath:'./dist'
        }),
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ],
    mode:"none"
}