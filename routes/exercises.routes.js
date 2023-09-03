const express = require("express");
const router = express.Router();
const exerciseService = require("../services/exercise.services");

router.get("/:searchTerm", async (req, res, next) => {
    const { searchTerm } = req.params;

    exerciseService
        .searchExercises()
        .then(({ data }) => res.json(data))
        .catch(err => next(err))

})

module.exports = router
