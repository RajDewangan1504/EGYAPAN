import AWS from 'aws-sdk';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_AWS_REGION,
});

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: process.env.REACT_APP_AWS_BUCKET_NAME },
});


export const uploadFile = (file) => {
    const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        Key: file.name,
        Body: file,
        // ACL: 'public-read', // Optional: set to 'private' if the file should not be public
    };

    s3.upload(params, function (err, data) {
        if (err) {
            console.log('There was an error uploading your file: ', err);
            return;
        }
        console.log('Successfully uploaded file.', data);
    });
};