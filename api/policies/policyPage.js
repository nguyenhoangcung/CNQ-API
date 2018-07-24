'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.query.page = req.query && req.query.page && req.query.page.trim();

    req.checkQuery('page', req.__('page_malformed')).matches(/^[1-9][0-9]*$/);

    const validationResult = await req.getValidationResult();
    if (!validationResult.isEmpty()) req.query.page = 1;

    return next();
});
