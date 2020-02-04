const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

const fs = require('fs');
const pdf = require('pdf-parse');

module.exports = {
    authenticate,
    create,
    generatePdfdata
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function create(userParam) {
    let result = await User.findOne({ email: userParam.email });

    if (result) {
        throw 'Username "' + userParam.email + '" is already taken';
    }
    const user = new User(userParam);
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }
    console.log(user);
    await user.save();
}

async function generatePdfdata(data) {
    try {
        let dataBuffer = fs.readFileSync(__dirname + `/test.pdf`);
        let data = await pdf(dataBuffer)
        return data.text

    } catch (err) {
        console.log(err)
    }
}
