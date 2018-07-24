'use strict';

const redis = require('redis'),
    client = redis.createClient(sails.config.redis);

module.exports = {
    client: client,

    get: key => {
        return new Promise((resolve, reject) => {
            client.get(key, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

    stringsSet: (key, data, expiresIn) => {
        return new Promise((resolve, reject) => {
            client.set(key, data, 'EX', expiresIn, (err, data) => {
                if (err) return reject(err);

                resolve(data);
            });
        });
    },

    stringsSetNoExpires: (key, data) => {
        return new Promise((resolve, reject) => {
            client.set(key, data, (err, data) => {
                if (err) return reject(err);

                resolve(data);
            });
        });
    },

    delete: key => {
        return new Promise((resolve, reject) => {
            client.del(key, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },

    increment: key => {
        return new Promise((resolve, reject) => {
            client.incr(key, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }
};
