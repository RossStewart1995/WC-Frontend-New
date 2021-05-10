const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app){
    app.use(createProxyMiddleware('/api/add/', 
    {target: 'http://add.webcalc.40154196.qpc.hal.davecutting.uk/'}
    )),
    app.use(createProxyMiddleware('/api/sub/', 
    {target: 'http://sub.webcalc.40154196.qpc.hal.davecutting.uk/'}
    ))
}