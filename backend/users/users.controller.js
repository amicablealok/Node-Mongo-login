﻿const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.post('/pdfData', generatePdfDatas);

module.exports = router;

function authenticate(req, res, next) {
    console.log(req.body)
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {

    console.log(req.body);

    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

async function generatePdfDatas(req, res, next) {
    try {
        let result = await userService.generatePdfdata();
        console.log(result);
        res.send({success : true ,result: result});
    } catch (err) {
        res.send({success : false ,result: ""});
    }

}



