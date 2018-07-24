'use strict';

module.exports = function validationErrorsWeb(errors) {
    const req = this.req,
        res = this.res;

    res.status(422);
    const token = req.headers['x-access-token'];
    if (req.wantsJSON || sails.config.hooks.views === false) {
        res.header('x-access-token', token);
        return res.jsonx(errors);
    }

    req.flash('errors', errors);
    res.header('x-access-token', token);
    res.redirect('back');
};
