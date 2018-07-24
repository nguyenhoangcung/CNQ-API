"use strict";

const jwt = require("jsonwebtoken");

const UserService = {

    /**
     *
     * @param email
     * @param password
     * @return {Promise.<*>}
     */
    login: async (email, password, model) => {
        try {
            let user = await model
                .findOne({email})
                .select('_id password')
                .lean();

            if (!user) return null;

            let isPasswordCorrect = await BcryptService.compare(password, user.password);
            if (!isPasswordCorrect) return null;

            delete user.password;

            return user;
        }
        catch (error) {
            throw error;
        }
    },

    /**
     *
     * @param user
     * @return {*}
     */
    generateUserToken: (user) => {
        return jwt.sign(user, sails.config.jwtSecret, {expiresIn: sails.config.jwtExpiredIn});
    },
    /*
    * @param user
    * @return {*}
    */
    generateWalletToken: (user) => {
        return jwt.sign(user, sails.config.walletSecret, {expiresIn: sails.config.jwtExpiredIn});
    },
   /**

    /**
     * Store times sent SMS and Check is limited
     */
    checkSmsLimited: async (userId) => {
        try {
            let smsKey = sails.helpers.getSMSLimitKey(userId),
                timesSent = await RedisService.get(smsKey),
                limit = sails.config.smsLimit.limit,
                expiresIn = sails.config.smsLimit.time;

            if (timesSent ===  null) {
                await RedisService.stringsSet(smsKey, 1, expiresIn);
                return {isLimited: false};
            }
            else if (timesSent < limit) {
                await RedisService.increment(smsKey);
                return {isLimited: false};
            }
            else {
                return {isLimited: true};
            }
        }
        catch (error) {
            throw error;
        }
    },

};

module.exports = UserService;
