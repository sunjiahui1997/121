const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('index', resolve('src/index'))
            .set('manage', resolve('src/manage'))
    },
    pages: {
        index: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/index/main.js',
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致,意思就是显示的界面，这个template很重要！曾经因为这里不
            template: 'public/index.html',
            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'index.html',
            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index page',
            // 包含的模块，可选项
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        manage: {
            entry: 'src/manage/main.js',
            template: 'public/manage.html',
            filename: 'manage.html',
            title: 'manage page',
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
}
