/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

let httpMethods = ['get', 'post', 'put', 'patch', 'delete'],
    apiPrefix = '/api/v1';

const getNewRouteKey = function(routeKey) {
    routeKey = routeKey.toLowerCase();
    let newRouteKey = '';
    for (let method of httpMethods) {
        if (routeKey.indexOf(method) === 0) {
            let position = method.length;
            newRouteKey = [
                routeKey.slice(0, position),
                ' ',
                apiPrefix,
                routeKey.slice(position + 1)
            ].join('');
            break;
        }
    }
    return newRouteKey;
};

const generateRoutes = function(routes) {
    let newRoutes = {};
    for (let routeKey in routes) {
        let newRouteKey = getNewRouteKey(routeKey);
        newRoutes[newRouteKey] = routes[routeKey];
    }
    return newRoutes;
};

let routes = {
    /**
     * ============================================================================================
     *  API Routers
     * ============================================================================================
     */
    'post /register': 'AuthController.postRegister'
};

/**
 * This routes only used on development environment
 */
if (process.env.NODE_ENV !== 'production') {
    let routeOnlyUsedInDevelopment = {
        /** ======= Fake Routers ======= */
    };
    routes = Object.assign({}, routes, routeOnlyUsedInDevelopment);
}
routes = generateRoutes(routes);

let routeRenderView = {
    /** ======= View Routers ======= */
};
routes = Object.assign({}, routes, routeRenderView);

// Export routes
module.exports.routes = routes;
