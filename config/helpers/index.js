/**
 * This file export many useful function
 */

const ip = require('ip');
const MobileDetect = require('mobile-detect');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const https = require('https');
const url = require('url');

module.exports = {
    /**
     * is user verified id
     */
    isUserUploadedId: kyc => {
        return (
            kyc.nation &&
            kyc.fullname &&
            kyc.age &&
            kyc.idNumber &&
            kyc.linkToIdImage &&
            kyc.linkToSelfieImage &&
            kyc.sex &&
            kyc.genre
        );
    },
    /**
     * Return a random number
     * @param length - number of characters - default 6 - max 15
     * @returns {string}
     */
    randomNumber: (length = 6) => {
        if (length > 15) length = 15;
        let result = '';
        for (let i = 0; i < length; i++) {
            let randomNumber = Math.floor(Math.random() * 10);
            result += String(randomNumber);
        }
        return result;
    },

    /**
     * Return request Ip Address
     * @return {string}
     */
    getUserIpAddress: () => {
        return ip.address();
    },

    /**
     * Return User Device
     * @param header - request header user-agent
     * @return {*|String|string} e.g. 'desktop', 'ios', 'android' or 'undefined'
     */
    getUserDevice: header => {
        let detect = new MobileDetect(header),
            device = detect.os();
        return device || 'undefined';
    },

    /**
     * Convert Array Object to Array
     * input = [{id: 1, name: 'foo'}, {id: 2, name: 'baz'}]
     *    arrayObjectToArrayKey(input)          => [1, 2]
     *    arrayObjectToArrayKey(input, 'name')  => ['foo', 'baz']
     * @param arrayObject
     * @param property
     */
    arrayObjectToArrayValue: (arrayObject, property = '_id') => {
        let outputArray = [];
        arrayObject.forEach(object => {
            if (object.hasOwnProperty(property))
                outputArray.push(object[property]);
        });
        return outputArray;
    },

    /**
     * Return skip value in query pagination
     *    e.g Post.find({
     *          limit: 10,
     *          skip: getSkipItemByPage(page)
     *        })
     * @param page
     * @return {number}
     */
    getSkipItemByPage: page => {
        return (page - 1) * sails.config.paginateLimit;
    },

    /**
     * Calculator total pages
     * @param totalDocument
     */
    calculatorTotalPages: totalDocument => {
        return Math.ceil(totalDocument / sails.config.paginateLimit);
    },

    /**
     * Check if string is mongodb id
     * @param id
     * @return {boolean}
     */
    isMongoId: id => {
        return ObjectId.isValid(id);
    },

    /**
     * Convert string to MongoDb ObjectId
     * @param {string} id
     */
    toObjectId: id => {
        return mongoose.Types.ObjectId(id);
    },

    /**
     * Convert Array Object to Array Value
     * @param arrayObject
     * @param property
     */
    transferToArrayValue: function(arrayObject, property = '_id') {
        let outputArray = [];
        arrayObject.forEach(object => {
            if (object[property] !== undefined)
                outputArray.push(object[property]);
        });
        return outputArray;
    },

    /**
     * Return Error instance
     * @param data - of error will create
     *      message: display when log this error
     *      code: access when by error.code
     * @return {object} error instance
     */
    generateError: data => {
        let { message, code } = data;
        let error = new Error(message);
        if (code) error.code = code;
        return error;
    },

    /**
     *
     * @param populate
     * @param page
     */
    optionPaginate: (
        page = 1,
        selectFields,
        populate,
        limit = sails.config.paginateLimit
    ) => {
        return {
            select: selectFields,
            page: page,
            limit: limit,
            sort: { createdAt: -1 },
            populate: populate
        };
    },

    /**
     *
     * @param urlImage
     * @return name
     */
    getNameImage: urlImage => {
        let pathArr = urlImage.split('/');
        let name = pathArr[pathArr.length - 1];
        return name;
    },

    /**
     *
     * @param userId
     * @return string
     */
    getVerifyEmailRedisKey: userId => {
        return `user_email_${userId}`;
    },

    /**
     *
     * @param userId
     * @return string
     */
    getVerifyPhoneRedisKey: userId => {
        return `user_phone_${userId}`;
    },

    /**
     *
     * @param userId
     * @return string
     */
    getVerifyLoginRedisKey: userId => {
        return `user_login_${userId}`;
    },

    /**
     *
     * @param userId
     * @return string
     */
    getResetPasswordRedisKey: userId => {
        return `user_reset_pw_${userId}`;
    },

    /**
     *
     * @param userId
     * @return string
     */
    getLimitResetPasswordRedisKey: userId => {
        return `user_limit_reset_pw_${userId}`;
    },

    /**
     *
     * @param userId
     * @return string
     */
    getSMSLimitKey: userId => {
        return `sms_limit_${userId}`;
    },

    /**
     *
     * @param page
     * @return number
     */
    getPage: page => {
        if (!page || page < 0 || isNaN(page)) page = 1;
        return page;
    },

    generatePaginateLink: (req, total, page) => {
        let paginate = {
            total: total,
            page: page,
            pages: Math.ceil(total / sails.config.paginateLimit),
            limit: sails.config.paginateLimit,
            path: []
        };

        let path = url.parse(req.originalUrl).pathname;

        for (let i = 1; i <= paginate.pages; i++) {
            req.query.page = i;
            paginate.path.push(
                url.format({ pathname: path, query: req.query })
            );
        }

        return paginate;
    },

    /**
     *
     * @param object
     * @return array
     */
    transferValueObjectToArray: object => {
        let array = Object.keys(object).map(function(key) {
            return object[key];
        });
        return array;
    },

    verifyRecaptcha: code => {
        let verifyUrl = `${sails.config.urlVerifyRecapcha}?secret=${
            sails.config.recapchaSecretKey
        }&response=${code}`;
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
};
