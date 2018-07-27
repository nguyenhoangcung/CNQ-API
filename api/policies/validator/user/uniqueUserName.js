'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.body.username =
        req.body && req.body.username && req.body.username.trim().toLowerCase();

    const username = req.body.username;

    const checkUserExist = await User.count({
        username
    });

    if (!!checkUserExist) {
        return res.validationErrors(sails.errors.usernameExist, { error: 422 });
    }

    next();
});
