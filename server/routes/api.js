var express = require('express');
var collectionsController = require('../controllers/s3Controller');
var config = require('../config/config').options;


var apiRoutes = express.Router();
var clientRoutes = express.Router();

module.exports = function (app) {
    apiRoutes.get('/analysis/:collectionId', function (req, res, next) {
        analysisController.getMostRecent(req.params.collectionId, req, res);
    });

   
    
    //route of the 
    clientRoutes.get('/index.html', function (req, res, next) {
        res.sendFile('/client/index.html', config);
    });
    clientRoutes.get('/s3/*', function (req, res, next) {
        res.sendFile('/client/index.html', config)
    });
    app.use('/', clientRoutes);

}