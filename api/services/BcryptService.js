'use strict';
const bcrypt = require('bcrypt-nodejs');
const bcrypt_new = require('bcrypt');

module.exports = {
    /**
     * Hash password
     * @param originPassword
     * @returns {Promise}
     */
    hash: function(originPassword) {
        return new Promise(function(resolve, reject) {
            bcrypt.genSalt(10,'a', (err, salt) => {
                if (err) reject(err);
                bcrypt.hash(originPassword, salt, null, (err, hash) => {
                    if (err) {
                        sails.log.error('BcryptService - hash method: ', err);
                        reject(err);
                    } else resolve(hash);
                });
            });
        });
    },

    hash_new: function(originPassword) {
        return new Promise(function(resolve, reject) {
            bcrypt_new.genSalt(10, function(err, salt) {
                bcrypt_new.hash(originPassword, salt, function(err, hash) {
                    if (err) {
                        sails.log.error('BcryptService - hash method: ', err);
                        reject(err);
                    } else resolve(hash);
                });
            });
        });
    },

    compare: function(origin, hash) {
        return new Promise(function(resolve, reject) {
            bcrypt.compare(origin, hash, (err, result) => {
                if (err) {
                    sails.log.error('BcryptService - compare method: ', err);
                    reject(err);
                } else resolve(result);
            });
        });
    }
};
