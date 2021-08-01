const express = require('express');
const router = express.Router();
const auditService = require('./audit.service');
const jwt = require('../_helpers/jwt');
const { json } = require('body-parser');

router.get('/getLoginDetails', jwt(), getLoginDetails);

module.exports = router;

function getLoginDetails(req, res, next) {
    auditService.audit(req)
    .then(result => result ? res.json(result) : res.sendStatus(404))
    .catch(err => next(err));
 
}