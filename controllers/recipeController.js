const { sanitizeBody } = require('express-validator/filter');
const { body, validationResult } = require('express-validator/check');

const Recipe = require('../models/recipe');
const User = require('../models/user');

exports.index = (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};