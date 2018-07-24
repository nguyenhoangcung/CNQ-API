'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.body.email =
        req.body && req.body.email && req.body.email.trim().toLowerCase();

    req.checkBody('email', req.__('email_is_required')).notEmpty();
    req.checkBody('email', req.__('email_malformed')).isEmail();
    req
        .checkBody('email', req.__('email_malformed'))
        .matches(
            /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/i
        );

    const validationResult = await req.getValidationResult();
    if (validationResult.isEmpty()) return next();

    return res.validationErrors(validationResult.array(), { error: 422 });
});
