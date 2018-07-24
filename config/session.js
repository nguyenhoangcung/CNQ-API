/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * http://sailsjs.com/config/session
 */

module.exports.session = {

    /***************************************************************************
     *                                                                          *
     * Session secret is automatically generated when your new app is created   *
     * Replace at your own risk in production-- you will invalidate the cookies *
     * of your users, forcing them to log in again.                             *
     *                                                                          *
     ***************************************************************************/
    secret: 'f28d450d4a08f6eb7cd15ab4d97bb9cc',
    adapter: 'redis',

    // adapter: 'connect-redis',

    // host: '172.32.0.7',
    // port: 6379,
    // ttl: <redis session TTL in seconds>,
    // db: 0,
    // pass: <redis auth password>,
    // prefix: 'sess:',



    /***************************************************************************
     *                                                                          *
     * Customize when built-in session support will be skipped.                 *
     *                                                                          *
     * (Useful for performance tuning; particularly to avoid wasting cycles on  *
     * session management when responding to simple requests for static assets, *
     * like images or stylesheets.)                                             *
     *                                                                          *
     * http://sailsjs.com/config/session                                        *
     *                                                                          *
     ***************************************************************************/
    // isSessionDisabled: function (req){
    //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
    // },

};
