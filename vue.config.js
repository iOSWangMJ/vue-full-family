/**
 * Created by wangmj on 2018/11/13.
 */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports={
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/components'))
      .set('_conf',resolve('config'))
  },
  devServer:{
    port: 8081, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy:{
      '/api':{
        target:'localhost:3000/',
        changeOrigin:true,
        ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
