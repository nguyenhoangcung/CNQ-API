/**
 * 401(Unauthorized) Handler
 *
 * Usage:
 * return res.unauthorized();
 * return res.unauthorized({message, error});
 *
 * @param  {Object} options
 *    {string, object} message
 *    {number} error
 */

module.exports = function unauthorized(options = {}) {
    const { message, error } = options;

    // Get access to 'res' & 'req' object
    const res = this.res,
        req = this.req;

    // Set status code
    res.status(401);

    return res.jsonx({
        status: 401,
        data: null,
        message: message || req.__('request_unauthorized'),
        success: false,
        error: 401
    });
};
