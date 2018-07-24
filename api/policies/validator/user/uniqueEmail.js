'use strict';

module.exports = asyncWrap(async (req, res, next) => {
    req.body.email =
        req.body && req.body.email && req.body.email.trim().toLowerCase();

    const email = req.body.email;

    const checkUserExist = await User.count({
        email,
        isAdmin: User.isAdmin.user
    });

    if (!!checkUserExist) {
        return res.validationErrors(sails.errors.emailExist, { error: 422 });
    }

    next();
});
