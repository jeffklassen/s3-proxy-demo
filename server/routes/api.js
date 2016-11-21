var express = require('express');
var s3Controller = require('../controllers/s3Controller');
var config = require('../config/config').options;

var clientRoutes = express.Router();

module.exports = function (app) {
  
    clientRoutes.get('/index.html', function (req, res, next) {
        res.sendFile('/client/index.html', config);
    });
    clientRoutes.get('/video/*', function(req, res, next) {
        var path = req.path.substr('/video/'.length);
        console.log(path);
        s3Controller.streamVideo(path, req, res);
    });
    app.use('/', clientRoutes);

}
