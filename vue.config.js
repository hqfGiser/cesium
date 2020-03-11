module.exports = {
    pages: {
        index: {
            // 页面的入口
            entry: './src/home/home.js',

            // 页面的模板
            template: './public/home/home.html',

            //用于替换$(template)中<title>的内容<%= htmlWebpackPlugin.options.title %>
            title: "水利一张图综合展示"
        }
    }
}