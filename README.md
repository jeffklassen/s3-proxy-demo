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

## Key points
1. Notice how in `index.html` how the `<video>` tag is pointing at a resource on the local webserver. We want to stream the video through our local server rather than directly from s3. This allows us a great deal more flexibility in our implementation:
  * We can stream private S3 objects. Obviously, we won't want to make vendor content public on S3. In order to stream private objects, we must configure the AWS_ACCESS_ID and SECRET_ACCESS_KEY. For obvious security reasons, this should never be done via javascript in the browser.
  * We can dynamically support S3-like hosting environments. OpenStack Swift implements the S3 api but servers will never live at `s3.amazonaws.com` (the default S3 hostname). By simply configuring the AWS SDK (via the `S3_HOST` environment variable in this case) to point at the OpenStack Swift host URL, we can support OpenStack Swift stored files using the AWS S3 SDK/API.
2. Notice in `server/routes/api.js` how we intercept calls to `/video/*` and use the `server/controllers/s3controller.js` to stream the requested video to the browser.

