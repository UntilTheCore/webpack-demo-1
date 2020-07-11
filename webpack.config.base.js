// 基础webpack.config
// 还可以使用webpack-merge来实现不同环境用不同的config文件。
// 用style-loader会快一点，不用额外生成更多的文件。
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');
module.exports = {
    mode: "development",
    // 入口文件，默认是 src/index.js 文件
    // entry: 'index.js',

    // 生成文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 生成的文件名, 默认是 main.js
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 这样会在dist目录下生成同样目录和文件的text.html
            // filename 是输出文件名
            // filename: "./assets/test.html",

            // template 是以这个目录下的文件作为模板文件来输出，不用插件默认的html文件模板。
            // 在自己的模板文件内使用模板占位符可以在webpack中配置一些html信息
            template: "./assets/test.html",
            // 在这里就可以设置 text.html 的title
            title: "webpack-demo-1",
            // 还可以设置 meta
            // 它不会替换掉原来而viewport，是新生成一个
            'meta': {
                'viewport': 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
            }
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].[contenthash].css',
        //     chunkFilename: '[id].[contenthash].css',
        // })
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/i,
    //             // style-loader 和 MiniCssExtractPlugin 二选一，对css的处理需求一般只有1个
    //             use: ['style-loader', 'css-loader'],
    //             // use: [MiniCssExtractPlugin.loader, 'css-loader'],
    //         },
    //     ],
    // },
    // 如果不需要特别配置其他的内容，只下载webpack-dev-server然后配置package.json的脚本命令就可以运行了。
    // contentBase的意思是告知webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。添加更多的参数可以对其有更多地处理。
    // devServer: {
    //     contentBase : './dist'
    // }
    module: {
        rules: [
            // 处理引入scss
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    // 'sass-loader',
                    // 直接使用上面 sass-loader字符串不行的话就用下面这个对象。
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('dart-sass'),
                        },
                    }
                ],
            },
            // 处理引入 less 文件
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
        ],
    }
};



