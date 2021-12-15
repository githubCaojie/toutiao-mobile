module.exports = {
  publicPath: "./",
  outputDir: '../appcordova/www',
  // outputDir: 'D:/PROJECT_JTCOMMON/HNCRPM/tysoft-fatshan/pm/trunk/tysoft-fatshan-pm-sysconfig/src/main/webapp/WEB-INF/views/xcx/xcxmobile',
  lintOnSave: false,
  productionSourceMap: true,
  devServer: {
    port: '8285',
    proxy: {
      '/jtfile': {
        target: 'http://222.244.147.108:56789',
        // target: 'http://172.20.189.103:8181',
        pathRewrite: {  // 路径重写，
          '^/pmzl/jtfile': '/jtfile'
        },
        onProxyReq: function (proxyReq, req, res) {
          console.log("原路径：" + req.originalUrl, "代理路径：" + req.path)
        }
      },
      '/pmzl': {
        // target: 'http://124.71.28.186:8082',
        target: 'http://222.244.147.108:56789',

        changeOrigin: true,
        pathRewrite: {
          '^/pmzl': '/pmzl'
        },
        onProxyReq: function (proxyReq, req, res) {
          console.log("原路径：" + req.originalUrl, "代理路径：" + req.path)
        }
      },
      '/sysconfig': {
        target: 'http://222.244.147.108:56789',
        // target: 'http://172.20.189.103:8181',
        changeOrigin: true,
        pathRewrite: {
          '^/sysconfig': '/sysconfig'
        },
        onProxyReq: function (proxyReq, req, res) {
          console.log("原路径：" + req.originalUrl, "代理路径：" + req.path)
        }
      },
      '/safe': {
        target: 'http://222.244.147.108:56789',
        // target: 'http://172.20.189.103:8181',
        changeOrigin: true,
        pathRewrite: {
          '^/safe': '/safe'
        },
        onProxyReq: function (proxyReq, req, res) {
          console.log("原路径：" + req.originalUrl, "代理路径：" + req.path)
        }
      },
    }
  },
}