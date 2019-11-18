const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/index.php", {
      target: "http://m.qinqin.net",
      changeOrigin: true
    })
  );
};
