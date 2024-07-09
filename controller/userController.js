const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

async function adduser(req,res){
    try {
        const newUser = new User(req.body);
        result = await newUser.save();
        return res.status(200).send({message: "User registered Successfully",result});
    } catch (error) {
        return res.status(500).send(error);
    }
};

async function loginuser (req,res){
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).send({message: "User not found", success: false});
        }
        const token = jwt.sign({_id:user._id}, 'shriya', {expiresIn: '1h'});
        return res.status(200).send({message: "User loggedIn Successfully",user, token});
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = {adduser,loginuser}