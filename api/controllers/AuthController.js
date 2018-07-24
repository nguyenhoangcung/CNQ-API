/**
 * AuthController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @api {post} /login Login
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Login
     * @apiGroup AUTH
     *
     * @apiParam {String} [email]  Email of the User.<br><code>required malformed min:10 max:255</code>
     * @apiParam {String} [password]  Password of the User.<br><code>required min:6 max:255</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "email": "user@digitalcoin.com",
     *   "password": "123123"
     * }
     *
     * @apiSuccess {Number} [status=200] status response
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": "7apsIGEwpUFgj6yL5nYuXRWj2rnP9UrzK91w05mRxXswRFbSiI6IKlgAjeICxibySAIlHc2vOKaEcRsQyTCqMXmdj6kgM3T4TTOPHPPqirUFOhCmO7vm6xXVI0dgimJBiOxy7ICqXxce6Ss4UtvV9uJURnUVbCZSWtelkX5oGvx5QqQkj0gWZUHN44L9jwkHerkEDpikzsIUKAB8V8WRyulUfr2ThZMiO8R4daeWoynrPGSfFuhuxexYe1scCJX",
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422} [error=400,422] value error.
     * @apiErrorExample Error email required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email malformed:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_malformed",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email not exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_not_exist",
     *   "success": false,
     *   "error": 422
     * }
     *
     * @apiErrorExample Error password required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error password min length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_min_6_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error password max length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_max_255_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 422
     * }
     *
     * @apiErrorExample Error login fail:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "email_or_password_incorrect",
     *   "success": false,
     *   "error": 400
     * }
     */
    postLogin: asyncWrap(async (req, res) => {
        let { email, password, codeLogin } = req.body;

        let user = await UserService.login(email, password, User);

        if (!user)
            return res.validationErrors(sails.errors.wrongPasswordOrEmail, {
                error: 422
            });

        let token = UserService.generateUserToken(user);

        let userOption = {
            _id: user._id,
            email
        };

        console.log(req.userId);

        const userLogin = await Kyc.findOne({ user: req.userId }).select(
            'approvalStatus'
        );

        if (
            codeLogin === false &&
            userLogin.approvalStatus === Kyc.approveStatus.approved
        ) {
            EventEmitter.emit('user.send-code-login', userOption);
        }
        res.ok({ data: token });
    }),

    /**
     * @api {post} /register Register
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Register
     * @apiGroup AUTH
     *
     * @apiParam {String} [email]  Email of the User.<br><code>required malformed min:10 max:255</code>
     * @apiParam {String} [password]  Password of the User.<br><code>required min:6 max:255</code>
     * @apiParam {Boolean} [term1]  You have read and understand our Whitepaper<br><code>required</code>
     * @apiParam {Boolean} [term2]  You have read and understand our Token Sale Conditions<br><code>required</code>
     * @apiParam {Boolean} [term3]  You are NOT a Citizen of China<br><code>required</code>
     * @apiParam {Boolean} [term4]  You are NOT a Citizen of USA<br><code>required</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "email": "user@digital.com",
     *   "password": "123123",
     *   "term1": true,
     *   "term2": true,
     * }
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422} [error=400,422] value error.
     * @apiErrorExample Error email required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email malformed:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_malformed",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_exist",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error register fail:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     * @apiErrorExample Error password required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error password min length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_min_6_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error password max length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_max_255_chars",
     *   "success": false,
     *   "error": 422
     * }
     *
     * @apiErrorExample Error term1 required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term1_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term1 must be true:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term1_must_be_true",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term2 required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term2_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term2 must be true:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term2_must_be_true",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term3 required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term3_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term3 must be true:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term3_must_be_true",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term4 required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term4_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error term4 must be true:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "term4_must_be_true",
     *   "success": false,
     *   "error": 422
     * }
     */
    postRegister: asyncWrap(async (req, res) => {
        const { email, password } = req.body;
        const referrerUser = req.referrerUser;
        const isReferrerLv2 = req.isReferrerLv2;
        // create user
        let userData = {
            email,
            password
        };

        if (referrerUser) {
            userData.referrer = referrerUser._id;
        }

        if (isReferrerLv2) {
            userData.isReferrer2 = true;
        }

        let user = await User.create(userData);

        if (user) {
            await Kyc.create({ user: user._id });
        }

        if (referrerUser) {
            const promise = await Promise.all([
                User.findOne({ _id: referrerUser._id }),
                Kyc.findOne({ user: referrerUser._id })
            ]);
            let emailRef = promise[0].email;
            let fullname = promise[1].fullname || 'user';
            EventEmitter.emit('send-referrer-email', {
                emailRef,
                fullname,
                email
            });
        }

        EventEmitter.emit('send-verify-email', user);
        res.ok({});
    }),

    /**
     * @api {get} /verify_email/:user_id/:active_code Active email
     * @apiExample Example usage:
     *     http://localhost:1234/api/v1/user/verify_email/5acddc27404bc35eb360736f/G8NyAx9vKtRQ6jzKjdIJNFjIfo7kO62r
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Active email
     * @apiGroup AUTH
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422,7} [error=400,422,7] value error.
     * @apiErrorExample Error active link is incorrect or timeout:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "active_link_is_incorrect_or_timeout",
     *   "success": false,
     *   "error": 7
     * }
     * @apiErrorExample Error user not exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_not_exist",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email verified:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_verified",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error active fail:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     */
    verifyUserEmail: asyncWrap(async (req, res) => {
        let userId = req.params.user_id;
        let redisKey = sails.helpers.getVerifyEmailRedisKey(userId);

        // find user by id.
        const user = await User.findOne({ _id: userId });

        // update kyc is verified email
        await Kyc.findOneAndUpdate(
            { user: user._id },
            { isEmailVerified: true }
        );

        // remove redis link
        await RedisService.delete(redisKey);

        res.ok({});
    }),

    /**
     * @api {post} /verify/email/resend_verification_email Resend verify email
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Resend verify email
     * @apiGroup AUTH
     *
     * @apiHeader {String} x-access-token Token
     * @apiHeaderExample Authorization Example:
     * x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWNkZTk3NGJhYTg3ODc0NTE3OWUyYjciLCJpYXQiOjE1MjM1MTUxNzgsImV4cCI6MTUyNDExOTk3OH0.pILx3XudPH6cmmuCr1P7SQPW9dXVSrV_z_Ov-dkjdVY
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422,401] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422,401} [error=400,422,401] value error.
     * @apiErrorExample Error request unauthorized:
     * {
     *   "status": 401,
     *   "data": null,
     *   "message": "request_unauthorized",
     *   "success": false,
     *   "error": 401
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email verified:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_verified",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error resend mail failed:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     */
    postResendVerifyEmail: asyncWrap(async (req, res) => {
        EventEmitter.emit('send-verify-email', req.user);
        res.ok({});
    }),

    /**
     * @api {post} /reset_password/send_mail Send email reset password
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Send email reset password
     * @apiGroup AUTH
     *
     * @apiParam {String} [email]  Email of the User.<br><code>required malformed min:10 max:255</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "email": "digital@gmail.com",
     * }
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422} [error=400,422] value error.
     * @apiErrorExample Error email required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email malformed:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_malformed",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email not exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "email_not_exist",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error limit send mail reset password:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "limit_send_mail_reset_password",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error send mail reset password failed:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     */
    postResetPassword: asyncWrap(async (req, res) => {
        let { email } = req.body;
        let user = await User.findOne({
            email,
            isAdmin: User.isAdmin.user
        }).select('_id email fullname');

        if (!user)
            return res.validationErrors(sails.errors.emailNotExist, {
                error: 422
            });

        EventEmitter.emit('user.reset-password', user);

        res.ok({});
    }),

    postLoginReSendCode: asyncWrap(async (req, res) => {
        let user = await User.findOne({
            _id: req.user._id,
            isAdmin: User.isAdmin.user
        }).select('_id email');

        if (!user)
            return res.validationErrors(sails.errors.emailNotExist, {
                error: 422
            });

        EventEmitter.emit('user.send-code-login', user);

        res.ok({});
    }),

    /**
     * @api {get} /reset_password/:user_id/:active_code Check change new password
     * @apiExample Example usage:
     *    http://localhost:1234/api/v1/user/reset_password/5ab314337288960391a133e6/mXOSViDROSzBwHG5rLdkXIP9bM4crhQK
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Check change new password
     * @apiGroup AUTH
     *
     * @apiSuccess {Number} [status=200] status response
     * @apiSuccess {Json} [data=null] data response
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422,7} [error=400,422,7] value error.
     * @apiErrorExample Error active link is incorrect or timeout:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "active_link_is_incorrect_or_timeout",
     *   "success": false,
     *   "error": 7
     * }
     * @apiErrorExample Error user not exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_not_exist",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error check change new password failed:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     */
    checkChangeNewPassword: asyncWrap(async (req, res) => {
        res.ok({});
    }),

    /**
     * @api {post} /reset_password/:user_id/:active_code Change new password
     * @apiExample Example usage:
     *    http://localhost:1234/api/v1/user/reset_password/5ab314337288960391a133e6/mXOSViDROSzBwHG5rLdkXIP9bM4crhQK
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Change new password
     * @apiGroup AUTH
     *
     * @apiParam {String} [password]  Password of the User.<br><code>required min:6 max:255</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "password": "123456",
     * }
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422,7} [error=400,422,7] value error.
     * @apiErrorExample Error password required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error password min length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_min_6_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error password max length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "password_max_255_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error active link is incorrect or timeout:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "active_link_is_incorrect_or_timeout",
     *   "success": false,
     *   "error": 7
     * }
     * @apiErrorExample Error user not exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_not_exist",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error change new password failed:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     */
    changeNewPassword: asyncWrap(async (req, res) => {
        let userId = req.params.user_id,
            password = req.body.password,
            redisKeyCode = sails.helpers.getResetPasswordRedisKey(userId),
            passwordHash = await BcryptService.hash(password);

        await User.findByIdAndUpdate(userId, { password: passwordHash });
        await RedisService.delete(redisKeyCode);

        res.ok({});
    }),

    /**
     * @api {get} /check_policy Check policy
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Check policy
     * @apiGroup AUTH
     *
     * @apiHeader {String} x-access-token Token
     * @apiHeaderExample Authorization Example:
     * x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": "",
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422,401] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,401,422,1,2,5,6} [error=400,401,422,1,2,5,6] value error.
     * @apiErrorExample Error request unauthorized:
     * {
     *   "status": 401,
     *   "data": null,
     *   "message": "request_unauthorized",
     *   "success": false,
     *   "error": 401
     * }
     * @apiErrorExample Error email not verify:
     * {
     *    "status": 422,
     *    "message": "email_not_verify",
     *    "data": null,
     *    "success": false,
     *    "error": 1,
     * }
     * @apiErrorExample Error phone not verify:
     * {
     *    "status": 422,
     *    "message": "phone_not_verify",
     *    "data": null,
     *    "success": false,
     *    "error": 2,
     * }
     * @apiErrorExample Error advice user create wallet:
     * {
     *    "status": 422,
     *    "message": "advice_create_wallet",
     *    "data": null,
     *    "success": false,
     *    "error": 5,
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 6
     * }
     * @apiErrorExample Error check policy failed:
     * {
     *    "status": 400,
     *    "message": "bad_request",
     *    "data": null,
     *    "success": false,
     *    "error": 400,
     * }
     */
    checkPolicy: asyncWrap(async (req, res) => {
        res.ok({});
    }),

    /**
     * @api {post} /verify/phone/confirm_code Verify phone
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Verify phone
     * @apiGroup AUTH
     *
     * @apiHeader {String} x-access-token Token
     * @apiHeaderExample Authorization Example:
     * x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ
     *
     * @apiParam {Number} [code]  Code verify.<br><code>required</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "code": 123456
     * }
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": "",
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422,401] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=true] status success.
     * @apiError {Number=400,401,422,1,6} [error=400,401,422,1,6] value error.
     * @apiErrorExample Error request unauthorized:
     * {
     *   "status": 401,
     *   "data": null,
     *   "message": "request_unauthorized",
     *   "success": false,
     *   "error": 401
     * }
     * @apiErrorExample Error code require:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "code_is_require",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error active link is incorrect or timeout:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "active_link_is_incorrect_or_timeout",
     *   "success": false,
     *   "error": 7
     * }
     * @apiErrorExample Error email not verify:
     * {
     *    "status": 422,
     *    "message": "email_not_verify",
     *    "data": null,
     *    "success": false,
     *    "error": 1,
     * }
     * @apiErrorExample Error phone verified:
     * {
     *    "status": 422,
     *    "message": "phone_verified",
     *    "data": null,
     *    "success": false,
     *    "error": 422,
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 6
     * }
     * @apiErrorExample Error verify phone failed:
     * {
     *    "status": 400,
     *    "message": "bad_request",
     *    "data": null,
     *    "success": false,
     *    "error": 400,
     * }
     */
    postConfirmVerifyPhoneCode: asyncWrap(async (req, res) => {
        let userId = req.user._id;
        let redisKey = sails.helpers.getVerifyPhoneRedisKey(userId);
        const user = await User.findOne({ _id: userId });

        await Kyc.findOneAndUpdate(
            { user: user._id },
            {
                isPhoneVerified: true
            }
        );
        // remove redis key
        await RedisService.delete(redisKey);
        res.ok({});
    }),

    postLoginConfirmCode: asyncWrap(async (req, res) => {
        let userId = req.user._id;
        let redisKey = sails.helpers.getVerifyLoginRedisKey(userId);
        // remove redis key
        await RedisService.delete(redisKey);
        res.ok({});
    }),

    /**
     * @api {post} /verify/phone/send_code Send code verify phone
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Send code verify phone
     * @apiGroup AUTH
     *
     * @apiHeader {String} x-access-token Token
     * @apiHeaderExample Authorization Example:
     * x-access-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWIzMTQzMzcyODg5NjAzOTFhMTMzZTYiLCJpYXQiOjE1MjE2ODc3MjMsImV4cCI6MTUyMjI5MjUyM30.k6_TjBdghiKVKB7EXCROjugrRuSaSn8hQMM7RXdXxxQ
     *
     * @apiParam {Number} [Phone]  Phone verify.<br><code>required</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "phone": +841659890153
     * }
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": "",
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422,401] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=true] status success.
     * @apiError {Number=400,401,422,1,6} [error=400,401,422,1,6] value error.
     * @apiErrorExample Error request unauthorized:
     * {
     *   "status": 401,
     *   "data": null,
     *   "message": "request_unauthorized",
     *   "success": false,
     *   "error": 401
     * }
     * @apiErrorExample Error code require:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "code_is_require",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error email not verify:
     * {
     *    "status": 422,
     *    "message": "email_not_verify",
     *    "data": null,
     *    "success": false,
     *    "error": 1,
     * }
     * @apiErrorExample Error phone verified:
     * {
     *    "status": 422,
     *    "message": "phone_verified",
     *    "data": null,
     *    "success": false,
     *    "error": 422,
     * }
     * @apiErrorExample Error limit send code sms:
     * {
     *    "status": 422,
     *    "message": "limit_send_sms",
     *    "data": null,
     *    "success": false,
     *    "error": 422,
     * }
     * @apiErrorExample Error user blocked:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "user_blocked",
     *   "success": false,
     *   "error": 6
     * }
     * @apiErrorExample Error verify phone failed:
     * {
     *    "status": 400,
     *    "message": "bad_request",
     *    "data": null,
     *    "success": false,
     *    "error": 400,
     * }
     */
    postSendVerifyPhoneCode: asyncWrap(
        async (req, res) => {
            let phone = req.body.phone;
            // update phone
            await Kyc.findOneAndUpdate({ user: req.user._id }, { phone });

            // generate sms code
            // let verifyPhoneCode =
            //     sails.config.environment === "development"
            //         ? sails.config.smsDevCode
            //         : sails.helpers.randomNumber(6);
            let verifyPhoneCode = sails.helpers.randomNumber(6);

            // generate & update code to redis
            await RedisService.stringsSet(
                sails.helpers.getVerifyPhoneRedisKey(req.user._id),
                verifyPhoneCode,
                sails.config.redisVerifyUserPhoneExpires
            );

            // check && send sms
            let checkSmsLimited = await UserService.checkSmsLimited(
                req.user._id
            );
            if (checkSmsLimited.isLimited) {
                return res.validationErrors(sails.errors.limitSendSMS, {
                    error: 422
                });
            }
            // else let send sms
            // if (sails.config.environment !== "development")
            const phoneActive = await SMSService.send(phone, verifyPhoneCode);
            console.log(phoneActive);
            res.ok({});
        },
        (req, res, error) => {
            res.serverError({ message: req.__('Error sending SMS') });
        }
    ),

    healthyCheck: asyncWrap(async (req, res) => {
        res.ok({});
    }),
    /**
     * @api {post} /verify_identification Verify Identification
     * @apiVersion 1.0.0
     * @apiPermission user
     * @apiName Verify Identification
     * @apiGroup AUTH
     *
     * @apiParam {String} [nation]  nation of the User.<br><code>required malformed exist</code>
     * @apiParam {String} [fullname]  Fullname of the User.<br><code>required min:3 max:255</code>
     * @apiParam {String} [idNumber]  idNumber of the User.<br><code>required min:3 max:255</code>
     * @apiParam {String} [linkToIdImage] linkToIdImage of the User.<br><code>required url-valid</code>
     * @apiParam {String} [linkToSelfieImage] linkToSelfieImage of the User.<br><code>required url-valid</code>
     * @apiParam {Number} [age]  Age of the User.<br><code>required </code>
     * @apiParam {Number} [sex]  Sex of the User<br><code>required</code>
     * @apiParam {Array} [genre]  Genre of the User<br><code>required</code>
     * @apiParamExample {json} Request-Example:
     * {
     *   "idNumber": "20579564",
     *   "fullname": "digital gold",
     *   "linkToIdImage": "http://lorempixel.com/640/480/fashion",
     *   "linkToSelfieImage": "http://lorempixel.com/640/480/fashion",
     *   "age":23,
     *   "sex":2,
     *   "genre":[ "Music","Dance"]
     * }
     *
     * @apiSuccess {Number} [status=200] status response.
     * @apiSuccess {Json} [data=null] data response.
     * @apiSuccess {String} [message="success"] message success.
     * @apiSuccess {Boolean} [success=true] status success.
     * @apiSuccess {Number} [error=0] value error.
     * @apiSuccessExample Success Response:
     * {
     *   "status": 200,
     *   "data": null,
     *   "message": "success",
     *   "success": true,
     *   "error": 0
     * }
     * @apiError {Number} [status=400,422] status response.
     * @apiError {Json} [data=null] data response.
     * @apiError {String} message message error response.
     * @apiError {Boolean} [success=false] status success.
     * @apiError {Number=400,422,23,24,25} [error=400,422,23,24,25] value error.
     * @apiErrorExample Error nation required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "nation_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error nation malformed:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "nation_malformed",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error nation not exist:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "nation_not_exist",
     *   "success": false,
     *   "error": 24
     * }
     * * @apiErrorExample Error Genre is required
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "genre_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error Genre Malformed
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "genre_malformed",
     *   "success": false,
     *   "error": 422
     * }
     * * @apiErrorExample Error Genre Invalid
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "genre_invalid",
     *   "success": false,
     *   "error": 422
     * }
     * * @apiErrorExample Error Age is require
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "age_is_required",
     *   "success": false,
     *   "error": 422
     * }
     *  @apiErrorExample Error Age invalid
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "age_invalid",
     *   "success": false,
     *   "error": 422
     * }
     *  @apiErrorExample Error Sex is require
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "sex_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * * @apiErrorExample Error Sex is not existed
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "sex_is_not_existed",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error verify identification fail:
     * {
     *   "status": 400,
     *   "data": null,
     *   "message": "bad_request",
     *   "success": false,
     *   "error": 400
     * }
     *
     * @apiErrorExample Error fullname required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "fullname_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error fullname min length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "fullname_min_3_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error fullname max length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "fullname_max_255_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error fullname must not char:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "fullname_must_not_chars",
     *   "success": false,
     *   "error": 422
     * }
     *
     * @apiErrorExample Error Idnumber required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "idNumber_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error Idnumber min length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "Idnumber_min_3_chars",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error Idnumber max length:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "Idnumber_max_255_chars",
     *   "success": false,
     *   "error": 422
     * }
     *
     * @apiErrorExample Error linkToIdImage required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "linkToIdImage_is_required",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error linkToIdImage is invalid url:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "linkToIdImage_is_invalid_url",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error linkToSelfieImage required:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "linkToSelfieImage_is_required",
     *   "success": false,
     *   "error": 422
     * }
     *  * @apiErrorExample Error linkToSelfieImage is invalid url:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "linkToSelfieImage_is_invalid_url",
     *   "success": false,
     *   "error": 422
     * }
     * @apiErrorExample Error Update load kyc fail:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "update_Kyc_failed",
     *   "success": false,
     *   "error": 25
     * }
     * @apiErrorExample Error User uploaded idenfitication:
     * {
     *   "status": 422,
     *   "data": null,
     *   "message": "uploaded_Idenfitication",
     *   "success": false,
     *   "error": 23
     * }
     */
    postVerifyIndentification: asyncWrap(async (req, res) => {
        let kycParams = req.body;
        kycParams.selfieImageUploadedAt = new Date();
        kycParams.idImageUploadedAt = new Date();
        kycParams.approvalStatus = Kyc.approveStatus.pending;

        let data = await Kyc.findOneAndUpdate(
            {
                user: req.user._id
            },
            kycParams
        );
        if (!data)
            return res.validationErrors(sails.errors.update_Kyc_failed, {
                error: 422
            });
        res.ok({});
    }),

    getUidReferrer: asyncWrap(async (req, res) => {
        const userId = req.query.userId;
        const data = await User.findOne({ _id: userId }).select('uid');
        res.ok({ data });
    })
};
