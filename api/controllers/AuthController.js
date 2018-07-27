/**
 * AuthController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    postRegister: asyncWrap(async (req, res) => {
        const { username, passhash, client_id, type } = req.body;
        // create user
        let userData = {
            username,
            passhash,
            client_id
        };

        let user = await User.create(userData);
        console.log(user);
        let acl = [];

        if (type === 'user') {
            acl.push({
                pattern: `${sails.config.parttent_acl_first}/${user._id}/user`
            });
            await User.findByIdAndUpdate(
                { _id: user._id },
                { publish_acl: acl, subscribe_acl: acl }
            );
        } else {
            acl.push({
                pattern: `${sails.config.parttent_acl_first}/${user._id}/driver`
            });

            await User.findByIdAndUpdate(
                { _id: user._id },
                { publish_acl: acl, subscribe_acl: acl }
            );
        }

        res.ok({});
    })
};
