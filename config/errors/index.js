'use strict';

const errors = {
    isEmailVerified: {
        message: 'email_not_verify',
        code: 1
    },
    isPhoneVerified: {
        message: 'phone_not_verify',
        code: 2
    },
    pendingAccount: {
        message: 'user_pending',
        code: 3
    },
    notApproved: {
        message: 'user_not_approve',
        code: 4
    },
    isInitializedWallet: {
        message: 'advice_create_wallet',
        code: 5
    },
    userBlocked: {
        message: 'user_blocked',
        code: 6
    },
    activeCodeIncorrectOrTimeout: {
        message: 'active_link_is_incorrect_or_timeout',
        code: 7
    },
    emailNotExist: {
        message: 'email_not_exist',
        code: 8
    },
    emailExist: {
        message: 'email_exist',
        code: 9
    },
    wrongPasswordOrEmail: {
        message: 'email_or_password_incorrect',
        code: 10
    },
    emailVerified: {
        message: 'email_verified',
        code: 11
    },
    userNotExist: {
        message: 'user_not_exist',
        code: 12
    },
    limitResetPasswordAllows: {
        message: 'limit_reset_password_allows',
        code: 13
    },
    phoneVerified: {
        message: 'phone_verified',
        code: 14
    },
    phoneMalformed: {
        message: 'phone_malformed',
        code: 15
    },
    phoneExist: {
        message: 'phone_is_really_exist',
        code: 16
    },
    limitSendSMS: {
        message: 'limit_send_sms',
        code: 17
    },
    createdWallet: {
        message: 'created_wallet',
        code: 18
    },
    initWalletFailed: {
        message: 'init_wallet_failed',
        code: 19
    },
    genreMalformed: {
        message: 'genre_malformed',
        code: 20
    },
    genreInvalid: {
        message: 'genre_invalid',
        code: 21
    },
    isValidCaptcha: {
        message: 'captcha_invalid',
        code: 22
    },
    uploadImageError: {
        message: 'upload_image_error',
        code: 23
    },
    FileTypeNotAllow: {
        message: 'file_type_not_allow',
        code: 24
    },
    FileExceedsUploadLimit: {
        message: 'file_exceeds_upload_limit',
        code: 25
    },
    verifyIdNumberRequired: {
        message: 'verify_id_number_is_required',
        code: 26
    },
    verifyProfileRequired: {
        message: 'please_enter_full_information',
        code: 27
    },
    isIdentifyVerified: {
        message: 'uploaded_Idenfitication',
        code: 28
    },
    nationNotExist: {
        message: 'nation_not_exist',
        code: 29
    },
    update_Kyc_failed: {
        message: 'update_Kyc_failed',
        code: 30
    },
    isApproved: {
        message: 'user_not_approve',
        code: 31
    },
    recapchaInvalid: {
        message: 'recapcha_invalid',
        code: 32
    },
    notExistReferrerUser: {
        message: 'not_exist_referrer_user',
        code: 33
    },
    phoneRegisted: {
        message: 'Number_phone_is_registed',
        code: 34
    },
    isNotApproved: {
        message: 'is_Not_Approved',
        code: 35
    },
    minDateOfBirth: {
        message: 'date_of_birth_min_18',
        code: 36
    },
    maxDateOfBirth: {
        message: 'date_of_birth_max_now',
        code: 37
    }
};

module.exports = {
    error: (errorCode, req) => {
        if (!errorCode || !req)
            throw Error('sails.error require `errorCode` & `req` parameters');

        let error = errors[errorCode];
        if (!error)
            throw new Error('Not Found Error in sails/config/errors.js');

        return {
            message: req.__(error.message),
            code: error.code
        };
    },

    errors: errors,

    getError: error => {
        if (!error) throw new Error('Not found error: ' + error);

        return error;
    }
};
