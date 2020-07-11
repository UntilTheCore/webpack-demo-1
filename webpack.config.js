var path = require('path');

module.exports = {
    mode: 'development',
    // 入口文件，默认是 src/index.js 文件
    // entry: './foo.js',

    // 生成文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 生成的文件名, 默认是 main.js
        filename: '[name].[contenthash].js'
    }
};