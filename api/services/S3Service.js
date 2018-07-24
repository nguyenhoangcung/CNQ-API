'use strict';

const fs = require('fs');
const aws = require('aws-sdk');

aws.config.update({
    // accessKeyId: sails.config.s3.key,
    // secretAccessKey: sails.config.s3.secret
});

aws.config.apiVersions = {
    s3: '2006-03-01'
    // other service API versions
};

const s3 = new aws.S3();

const S3Service = {
    // Upload Image into S3.
    uploadImage: (filePath, fileName) => {
        return new Promise(resolve => {
            const params = {
                // Bucket: sails.config.s3.bucket,
                Key: fileName,
                Body: fs.createReadStream(filePath)
            };
            s3.upload(params, function(err, data) {
                if (err) {
                    resolve({ success: false, err });
                }
                resolve({ success: true, data });
            });
        });
    }
};

module.exports = S3Service;
