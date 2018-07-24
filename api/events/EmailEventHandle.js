'use strict';

/**
 * Event Listener: Handle Email Event
 * [{
 *    eventName: 'model.action',
 *    handler: function(data){}
 * }]
 */
const randomString = require('randomstring');

module.exports = [
    {
        eventName: 'send-verify-email',
        handler: async user => {
            try {
                let activeCode = randomString.generate(),
                    activeUrl = `${sails.config.siteUrl}/verify_email/${
                        user._id
                    }/${activeCode}`;

                console.log('link verify email:', activeUrl);

                await RedisService.stringsSet(
                    sails.helpers.getVerifyEmailRedisKey(user._id),
                    activeCode,
                    sails.config.redisVerifyUserEmailExpires
                );

                await EmailService.sendVerifyEmail(user.email, activeUrl);
            } catch (error) {
                sails.log.error('EmailEvent - user.register: ', error);
            }
        }
    },
    {
        eventName: 'send-referrer-email',
        handler: async reply => {
            try {
                await EmailService.sendReferrerEmail(reply);
            } catch (error) {
                sails.log.error('EmailEvent - user.register: ', error);
            }
        }
    },
    {
        eventName: 'approve.success',
        handler: async userId => {
            try {
                let user = await User.findById(userId).select('email');
                await EmailService.sendApprovedEmail(user.email);
            } catch (error) {
                sails.log.error('EmailEvent - approve.success: ', error);
            }
        }
    },
    {
        eventName: 'user.reset-password',
        handler: async user => {
            try {
                let redisKeyCode = sails.helpers.getResetPasswordRedisKey(
                        user._id
                    ),
                    redisKeyLimitSendMail = sails.helpers.getLimitResetPasswordRedisKey(
                        user.email
                    ),
                    expiresTimeCode = sails.config.redisResetPasswordExpires,
                    expiresTimeLimitSendMail =
                        sails.config.redisLimitResetPasswordExpires,
                    activeCode = randomString.generate(),
                    resetUrl = `${sails.config.siteUrl}/reset_password/${
                        user._id
                    }/${activeCode}`;

                await RedisService.stringsSet(
                    redisKeyCode,
                    activeCode,
                    expiresTimeCode
                );
                let numberLimit = await RedisService.get(redisKeyLimitSendMail);

                if (numberLimit) {
                    numberLimit = parseInt(numberLimit) + 1;
                } else {
                    numberLimit = 1;
                }

                await RedisService.stringsSet(
                    redisKeyLimitSendMail,
                    numberLimit,
                    expiresTimeLimitSendMail
                );
                await EmailService.sendEmailResetPassword(
                    user.email,
                    user.fullname,
                    resetUrl
                );
            } catch (error) {
                sails.log.error('EmailEvent - user.reset-password: ', error);
            }
        }
    },
    {
        eventName: 'user.send-code-login',
        handler: async user => {
            try {
                let verifyLoginCode = sails.helpers.randomNumber(6);
                console.log(user);
                // generate & update code to redis
                await RedisService.stringsSet(
                    sails.helpers.getVerifyLoginRedisKey(user._id),
                    verifyLoginCode,
                    sails.config.redisVerifyUserLoginExpires
                );

                await EmailService.sendEmailLoginCode(
                    user.email,
                    verifyLoginCode
                );
            } catch (error) {
                sails.log.error('EmailEvent - user.send-code-login: ', error);
            }
        }
    },
    {
        eventName: 'invest-successful',
        handler: async transaction => {
            try {
                sails.log.info('Event - Invest successful');
                // get user email
                let user;
                let kyc = await Kyc.findOne({
                    ethAddress: transaction.from
                }).select('fullname user');

                if (kyc) user = await User.findById(kyc.user).select('email');
                else return;

                await EmailService.sendInvestSuccessMail({
                    userEmail: user.email,
                    userName: kyc.fullname,
                    eth: transaction.amount,
                    kbr: Math.floor(transaction.amount * 19000), // todo: move to config
                    timestamp: transaction.createdAt
                });
            } catch (error) {
                sails.log.error('EmailEvent - invest-successful: ', error);
            }
        }
    }
];
