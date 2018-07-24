/**
 * 201 (CREATED) Response
 *
 * Usage:
 * return res.created();
 * return res.created({data: dataReturn, message: 'Message here'});
 *
 * @param  {Object} options
 *    {string, object} data
 *    {string, object} message
 */

module.exports = function created(options = {}) {
    const { data, message } = options;
    // Get access to `res`
    const res = this.res,
        req = this.req;

    // Set status code
    res.status(201);

    return res.jsonx({
        status: 201,
        data: data || null,
        message: message || req.__('created'),
        success: true,
        error: 0
    });
};
