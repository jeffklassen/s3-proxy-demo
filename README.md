# S3 Video Streaming Demo  
Demo for Streaming a video from S3 through a webserver.

## Running the Application
1. Make sure you have git, nodejs, and npm installed on your machine. Installation instructions for your platform are readily available with a simple google search.
2. This demo also assume that you already have an AWS account with read/write access to S3. 
3. Check out the project and `cd` into the project root.
4. Install the npm dependencies: `npm install`
5. Configure your machine as an AWS client. Instructions may vary by programming language SDK used. For node.js, the instructions can be found here: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
6. Upload a video to s3 to `{bucketName}/sl-tmp/9781921910000/9781921910000-samplevid.mp4`.
7. Run the application: `REGION=us-east-1  S3_HOST=s3.amazonaws.com BUCKET={bucketName}  npm start`
8. Direct your browser to `http://localhost:3000/index.html`

