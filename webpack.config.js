var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    mode: 'development',
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
        })
    ]
};



