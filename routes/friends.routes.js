const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

router.put('/addGymbro/:userId', (req, res) => {

    const { userId } = req.params;
    const { friendId } = req.body

    User
        .findByIdAndUpdate(userId, { $addToSet: { gymbro: friendId } })
        .then((response) => res.sendStatus(201))
        .catch((err) => console.log(err))
}
)

module.exports = router