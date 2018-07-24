/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden({message, error});
 *
 * @param  {Object} options
 *    {string, object} message
 *    {number} error
 */

module.exports = function forbidden(options) {
    const { message, error } = options;

    // Get access to 'res' & 'req' object
    const res = this.res,
        req = this.req;

    // Set status code
    res.status(403);

    return res.jsonx({
        status: 403,
        message: message || req.__('request_forbidden'),
        success: false,
        error: error || 403
    });
};
