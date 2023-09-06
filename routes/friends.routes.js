const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

router.post('/:userId/addGymbro/:friendId', (req, res) => {

    const { userId, friendId } = req.params;

    User
        .findByIdAndUpdate(userId, { $addToSet: { gymbro: friendId } }, { new: true })
        .then((response) => res.json(response))
        .catch((err) => console.log(err))
}
)

module.exports = router