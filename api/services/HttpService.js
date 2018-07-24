'use strict';

const request = require('request');

const HttpService = {
    /**
     *
     * @param uri
     * @param bearer_token
     * @return {Promise}
     */
    get: (uri, bearer_token) => {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'get',
                uri: uri,
                json: true
            };

            if (bearer_token)
                options.headers = {
                    Authorization: 'Bearer ' + bearer_token
                };

            request.get(options, (error, response, body) => {
                if (error) reject(error);
                else resolve(body);
            });
        });
    },

    /**
     *
     * @param uri
     * @return {Promise}
     */
    post: (uri, token) => {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'post',
                uri: uri,
                json: true
            };
            if (token)
                options.headers = {
                    'authentication': token
                };
            request.post(options, (error, response, body) => {
                if (error) reject(error);
                else resolve(body);
            });
        });
    },

    /**
     *
     * @param uri
     * @return {Promise}
     */
    postData: (uri, formData) => {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'post',
                uri: uri,
                json: true,
                form: formData
            };
            request.post(options, (error, response, body) => {
                if (error) reject(error);
                else resolve(body);
            });
        });
    }
};

module.exports = HttpService;
