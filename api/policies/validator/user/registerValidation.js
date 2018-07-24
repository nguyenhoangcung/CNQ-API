'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.checkBody('term1', req.__('term1_is_required')).notEmpty();
    req.checkBody('term1', req.__('term1_must_be_true')).isIn([true]);

    req.checkBody('term2', req.__('term2_is_required')).notEmpty();
    req.checkBody('term2', req.__('term2_must_be_true')).isIn([true]);

    req.checkBody('term3', req.__('term3_is_required')).notEmpty();
    req.checkBody('term3', req.__('term3_must_be_true')).isIn([true]);

    req.checkBody('term4', req.__('term4_is_required')).notEmpty();
    req.checkBody('term4', req.__('term4_must_be_true')).isIn([true]);

    req.checkBody('term5', req.__('term5_is_required')).notEmpty();
    req.checkBody('term5', req.__('term5_must_be_true')).isIn([true]);

    const validationResult = await req.getValidationResult();
    if (validationResult.isEmpty()) return next();

    res.validationErrors(validationResult.array(), { error: 422 });
});
