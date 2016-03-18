var AWS = require('aws-sdk');
var defaultAWSHost = 's3.amazon.com';

var config = {};
config.options = { root: path.normalize(__dirname + '/../../') };

// every language has a different way to change the base_url/endpoint for the AWS SDK. Here is the nodejs version
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Endpoint.html
config.s3 = function buildAWSS3() {
    var ep = null;
    var s3;
    if (!process.env.REGION || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
        console.log("You must enter an AWS region, aws_access_key_id, and aws_secret_access_key");
        console.log("Usage: REGION=us-east-1 AWS_ACCESS_KEY_ID=akid WS_SECRET_ACCESS_KEY=asak [HOST=hostname] npm start");
        process.exit(1);
    }
    AWS.config.update({ region: process.env.REGION, accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });

    if (process.env.HOST) {
        ep = new AWS.Endpoint(process.env.HOST || defaultAWSHost);
        s3 = new AWS.S3({ endpoint: ep });
    } else {
        s3 = new AWS.S3();
    }
    return s3;

}


module.exports = config;