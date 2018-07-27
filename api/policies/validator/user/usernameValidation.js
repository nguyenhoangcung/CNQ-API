'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.body.username =
        req.body && req.body.username && req.body.username.trim().toLowerCase();

    req.checkBody('username', req.__('username_is_required')).notEmpty();

    const validationResult = await req.getValidationResult();
    if (validationResult.isEmpty()) return next();

    return res.validationErrors(validationResult.array(), { error: 422 });
});
