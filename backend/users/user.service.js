const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    create,
};

async function authenticate({ email, password }) {
    console.log('+++++++++++++++++++' , email , password)
    const user = await User.findOne({ email });
    console.log(user);
    if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        console.log(token);
        console.log(token);
        console.log(token);


        return {
            ...userWithoutHash,
            token
        };
    }
}

async function create(userParam) {
    console.log('+**********************************************************')
    if (await User.findOne({ email: userParam.email })) {
        throw 'Username "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);
    console.log(userParam);
    console.log(userParam.password);
    // hash password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }
    console.log(user);
    // save user
    await user.save();
}

