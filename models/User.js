const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const Cube = require('./Cube');


const userSchema = new mongoose.Schema({
    _creatorId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cube'}],

    username: {
        type: String,
        required: true,
        createIndex: {
            unique: true
        }, 
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', function(next) {
    const user = this;
    
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if(err) return next(err);
        
        bcrypt.hashSync(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            } else {
                user.password = hash;
                next();
            }
        });
    });
});

userSchema.methods.comparePassword = 
    function(candiatePassword, cb) {
        bcrypt.compare(candiatePassword, this.password, function(err, isMatch) {
            if(err) return cb(err);
            
                cb(null, isMatch);
        });
    };

module.exports = mongoose.model('User', userSchema);