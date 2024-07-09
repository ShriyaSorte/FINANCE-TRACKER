const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    username : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    ucreatedat:{type: Date, default:Date.now ,required: true},
    umodifiedat:{type: Date, default:Date.now, required: true}
});

userSchema.pre('save', async function (next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);