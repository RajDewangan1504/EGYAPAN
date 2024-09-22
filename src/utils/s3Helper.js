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
        ContentDisposition: 'inline',
        ContentType: 'application/pdf'
    };

    return new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
            if (err) {
                console.error('There was an error uploading your file: ', err);
                reject(err); 
            } else {
                console.log('Successfully uploaded file.', data);
                resolve(data); 
            }
        });
    });
};
