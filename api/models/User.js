'use strict';
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const isAdmin = {
    user: 0,
    admin: 1,
    superAdmin: 2
};

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            require: true,
            lowercase: true,
            trim: true,
            min: 10,
            max: 255
        },
        password: { type: String, require: true, min: 6, max: 255 },
        uid: { type: Number },
        referrer: { type: mongoose.Schema.ObjectId },
        isAdmin: { type: Number, enum: [0, 1, 2], default: 0 },
        isLocked: { type: Boolean, default: false },
        isReferrer2: { type: Boolean },
        isBonusLevel2: {
            type: Boolean,
            default: false
        },
        digitalGoldAddress: { type: String },
        address: { type: Object },
        balance: { type: Number },
        walletJsonFile: { type: Object }
    },
    { timestamps: true }
);

UserSchema.plugin(mongoosePaginate);

// Before create new User, let generate uid and hash user password
UserSchema.pre('save', async function save(next) {
    try {
        const user = this;

        if (!user.uid) {
            let lastUserUid = await User.count(),
                startUserId = 1001;
            user.uid = lastUserUid + startUserId;
        }

        user.email = user.email && user.email.trim().toLowerCase();
        // hash password
        if (user.password)
            user.password = await BcryptService.hash(user.password);

        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', UserSchema);
module.exports.isAdmin = isAdmin;
