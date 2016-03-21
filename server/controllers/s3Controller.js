var config = require('../config/config')
var s3 = config.s3();
var bucket = config.defaultBucket;
exports.streamVideo = function(path, req, res) {

    var params = { Bucket: bucket, Key: path };

    s3.getObject(params).
        on('httpData', function(chunk) {
            res.write(chunk);
        }).
        on('httpDone', function() {
            res.end();
        }).
        on('error', function(err) {
            console.log(err);
            res.end();
        }).
        send();
};
