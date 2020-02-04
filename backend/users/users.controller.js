const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.post('/pdfData', generatePdfDatas);

module.exports = router;

async function authenticate(req, res, next) {
    try {
        let user = await userService.authenticate(req.body)

        if (user) {
            res.status(200).json({success: true, message: 'SuccessFully Log In '})
        }
        else {
            res.status(400).json({success: false, message: 'Username or password is incorrect'})
        }
    }
    catch (err) {
        console.log(err);
        throw err;
    }

}

async function register(req, res, next) {

    try {
        console.log(req.body.userData);
        let data = req.body.userData

        let result = await userService.create(data);
        if (result) {
            res.send({success: true, result: "Successfully Registration Done "});
        }
        else {
            res.send({success: false, result: "Error in Registration"});
        }
    }
    catch (err) {
        res.send({success: false, result: "Error in Registration"});
    }

}

async function generatePdfDatas(req, res, next) {
    try {
        let result = await userService.generatePdfdata();
        console.log(result);
        res.send({success: true, result: result});
    }
    catch (err) {
        res.send({success: false, result: ""});
    }

}



