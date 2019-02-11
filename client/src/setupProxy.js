// important! this file allows our front end server and back end server to work seamlessly using the http proxy middleware package
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000'}))
  app.use(proxy('/api/**', { target: 'http://localhost:5000'}))
}
