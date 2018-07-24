/**
 * 400 (Bad Request) Handler
 * Handle for validation errors
 * Usage:
 * return res.validationError(errors);
 *
 * @param  {Object} options
 *  Properties
 *    {string} message - error message
 *    {number} error - error code
 * @param {array, object} errors - detail of errors - return from express-validator middleware
 */

module.exports = function validationErrors(errors, options = {}) {
    const { error } = options;

    // Get access to 'res' & 'req' object
    const res = this.res,
        req = this.req;

    // Set status code
    res.status(422);

    const response = {
        status: 422,
        message:
            errors && errors[0] && errors[0].msg
                ? errors && errors[0] && errors[0].msg
                : errors.message,
        data: null,
        success: false,
        error: error ? error : errors.code
    };

    if (sails.config.environment === 'development')
        response.devMessages = errors;

    return res.jsonx(response);
};
