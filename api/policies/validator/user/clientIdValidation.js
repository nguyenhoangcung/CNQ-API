'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.body.client_id = req.body && req.body.client_id;

    req.checkBody('client_id', req.__('client_id_is_required')).notEmpty();
    req.checkBody('client_id', req.__('client_id_min_1_chars')).isLength({
        min: 6
    });
    req.checkBody('client_id', req.__('password_max_255_chars')).isLength({
        max: 255
    });

    const validationResult = await req.getValidationResult();
    if (validationResult.isEmpty()) return next();

    return res.validationErrors(validationResult.array(), { error: 422 });
});
