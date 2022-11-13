const express = require('express');
const router = express.Router();
const {User} = require("../db");

//return all users (/users)
router.get('/', async (req, res, next) => {
    try{
        res.send(await User.findAll());
    }catch (error) {
        console.log("Error in GET /api/users :\n\n", error);
        next(error);
    }
});

//log in one user
router.post('/login', async (req, res, next) => {
    try {
        res.send(await User.authenticate(req.body));
    } catch (error) {
        next(error);
    }
});

module.exports = router;