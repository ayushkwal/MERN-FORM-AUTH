const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postControllers')
const {requireAuth,checkUser} = require('../Middlewares/authMiddleware')


router.get('/myposts',requireAuth,postController.allmyposts_get);

module.exports = router;