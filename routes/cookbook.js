const express = require('express');
const router = express.Router();

// Require controller modules
const recipe_controller = require('../controllers/recipeController');

// ================ RECIPE ROUTES =================

// GET cookbook homepage
router.get('/', recipe_controller.index);

module.exports = router;