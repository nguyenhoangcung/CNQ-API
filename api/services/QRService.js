'use strict';
const qrCode = require('qrcode');

const QRService = {
    createQrCode: content => {
        return new Promise((resolve, reject) => {
            qrCode.toDataURL(content, function(err, url) {
                if (err) reject(err);
                else resolve(url);
            });
        });
    }
};

module.exports = QRService;
