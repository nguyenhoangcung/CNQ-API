/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
    environment: 'development',

    // mongodbUri: 'mongodb://localhost:27017/cnq',

    mongodbUri: 'mongodb://localhost:27017/whgp2018mqtt',
    // mongodbUri: process.env.MONGODB || 'mongodb://172.16.1.26:28017/whgp2018mqtt',

    parttent_acl_first: 'whgp2018',

    port: process.env.PORT || 1234
};
