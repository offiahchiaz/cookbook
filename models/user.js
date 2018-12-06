const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 1,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

// Virtual for the user's URL
UserSchema.virtual('url').get(function () {
    return `/cookbook/user/${this._id}`;
});

module.exports = mongoose.model('User', UserSchema);