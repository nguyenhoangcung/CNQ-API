'use strict';

const https = require('https');

function verifyRecaptcha(verifyUrl) {
    return new Promise(resolve => {
        https.get(verifyUrl, function(res) {
            let data = '';
            res.on('data', function(chunk) {
                data += chunk.toString();
            });
            res.on('end', function() {
                try {
                    let parsedData = JSON.parse(data);
                    resolve(parsedData.success);
                } catch (e) {
                    resolve(false);
                }
            });
        });
    });
}

module.exports = {
    verify: async req => {
        try {
            const key = sails.config.reCaptcha.secretKey,
                code = req.body['recapcha'],
                verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${key}&response=${code}`;
            return await verifyRecaptcha(verifyUrl);
        } catch (error) {
            sails.log.info('Error when verify re captcha');
            return false;
        }
    }
};
