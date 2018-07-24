module.exports = {

    environment: process.env.NODE_ENV || 'production',
    paginateLimit: 10,
    port: 1234,


    models: {
        connection: 'mongoDbServer',
        migrate: 'safe'
    },

    redis: {
        host: 'localhost',
        port: 6379
    },

    // mongodbUri: '',

};
