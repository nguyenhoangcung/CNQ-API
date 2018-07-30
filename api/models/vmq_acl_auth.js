'use strict';
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const vmq_acl_authSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            lowercase: true,
            trim: true,
            min: 10,
            max: 255
        },
        mountpoint: { type: String, default: '' },
        passhash: { type: String, require: true, min: 6, max: 255 },
        publish_acl: { type: Array },
        subscribe_acl: { type: Array },
        client_id: { type: String }
    },
    { collection: 'vmq_acl_auth' }
);

vmq_acl_authSchema.plugin(mongoosePaginate);

// Before create new User, let generate uid and hash user password
vmq_acl_authSchema.pre('save', async function save(next) {
    try {
        const user = this;

        user.username = user.username && user.username.trim().toLowerCase();
        // hash password
        if (user.passhash)
            user.passhash = await BcryptService.hash(user.passhash);

        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model(
    'vmq_acl_auth',
    vmq_acl_authSchema,
    'vmq_acl_auth'
);
