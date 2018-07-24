'use strict';

const jwt = require('jsonwebtoken');
/**
 * Verify token and return userId from token if token correct
 * @param token
 * @return {Promise}
 */
const jwtVerify = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, sails.config.jwtSecret, (error, user) => {
            if (error) reject(error);
            else resolve(user._id);
        });
    });
};

module.exports.http = {
    middleware: {
        logger: require('morgan')('dev'),
        expressValidator: require('express-validator')(),
        static: require('express').static('./assets'),
        // flashMessage: require('express-flash')(),

        order: [
            'static',
            'logger',
            'bodyParser',
            // 'session',
            // 'flashMessage',
            'expressValidator',
            'handleBodyParserError',
            'methodOverride',
            'decodedToken',
            // 'sessionAuth',
            // '$custom',
            'router',
            'favicon',
            '404',
            '500'
        ],

        decodedToken: async (req, res, next) => {
            try {
                let token = req.headers['x-access-token'];

                if (token === 'null') return next();

                let userId = await jwtVerify(token);

                req.user = await User.findById(userId);

                next();
            } catch (error) {
                // Error when decode token, and req.user will be null
                //  -> requireLogin police with return 401
                // sails.log.error('Error when decoded token');
                // sails.log.error(error);
                next();
            }
        },

        sessionAuth: async (req, res, next) => {
            try {
                if (req.session && req.session.user) {
                    let user = await User.findById(req.session.user._id).lean();
                    req.session.authenticated = true;
                    res.locals.authenticated = true;
                    req.user = user;
                    res.locals.user = user;
                } else {
                    req.session.authenticated = false;
                    res.locals.authenticated = false;
                }
                next();
            } catch (error) {
                sails.log.error(error);
                req.user = null;
                req.session.authenticated = false;
                res.locals.authenticated = false;
                next();
            }
        }
    }
};
