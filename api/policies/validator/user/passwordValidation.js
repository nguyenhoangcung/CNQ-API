'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.body.password =
        req.body && req.body.password;

    req.checkBody('password', req.__('password_is_required')).notEmpty();
    req
        .checkBody('password', req.__('password_min_6_chars'))
        .isLength({ min: 6 });
    req
        .checkBody('password', req.__('password_max_255_chars'))
        .isLength({ max: 255 });

    const validationResult = await req.getValidationResult();
    if (validationResult.isEmpty()) return next();

    return res.validationErrors(validationResult.array(), { error: 422 });
});
