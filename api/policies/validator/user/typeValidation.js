'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    const type = req.body && req.body.type;

    console.log(typeof type);

    req.checkBody('type', req.__('type_is_required')).notEmpty();

    if (type === 'user' || type === 'driver') {
        return next();
    } else {
        return res.validationErrors(sails.errors.typeUndefined);
    }

    const validationResult = await req.getValidationResult();
    if (validationResult.isEmpty()) return next();

    return res.validationErrors(validationResult.array(), { error: 422 });

    next();
});
