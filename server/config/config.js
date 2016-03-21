var AWS = require('aws-sdk');
var defaultAWSHost = 's3.amazon.com';
var path = require('path');
var config = {};
config.options = { root: path.normalize(__dirname + '/../../') };
config.defaultBucket = process.env.BUCKET;
// every language has a different way to change the base_url/endpoint for the AWS SDK. Here is the nodejs version
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Endpoint.html

// It is also important to make sure that we have aws id/secret key configured appropriately. For Nodejs, see:
// http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
config.s3 = function buildAWSS3() {
    var ep = null;
    var s3;

    if (!process.env.REGION || !process.env.S3_HOST || !process.env.BUCKET) {
        console.log("You must enter an AWS region, aws_access_key_id, and aws_secret_access_key");
        console.log("Usage: REGION=us-east-1 BUCKET=bucket_name S3_HOST=hostname npm start");
        process.exit(1);
    }
    AWS.config.update({ region: process.env.REGION});

    ep = new AWS.Endpoint(process.env.S3_HOST);
    s3 = new AWS.S3({ endpoint: ep });

    return s3;

}


module.exports = config;