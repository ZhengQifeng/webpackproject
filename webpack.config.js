var webpack = require("webpack");

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,   //加载json文件
        loader: "json-loader"    //'-loader'不能少
      },

      {
      	test: /\.css$/,  //加载css文件
      	loader: "style-loader!css-loader"
      },

      /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
      {
        test: /\.js$/,
        loader: 'babel-loader',
        /* 排除模块安装目录的文件 */
        exclude: /node_modules/
      },

      {
      	test: /\.vue$/,    //加载vue插件
      	loader: "vue-loader"
      },

      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file-loader" 
      },

      {
        test: /\.(woff|woff2)$/, 
        loader:"url-loader?prefix=font/&limit=5000"   //一定要加'-loader'
      },

      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
      },

      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
      }

    ]
  },

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  resolve: {    //使用vue插件时必须配置这个
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  //引入bootstrap前需要先引入jquery
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}