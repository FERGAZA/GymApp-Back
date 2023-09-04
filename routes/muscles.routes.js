const express = require("express");
const router = express.Router();
const muscleService = require("../services/muscles.services");

router.get("/:searchTerm", (req, res, next) => {
    const { searchTerm } = req.params;

    console.log(searchTerm)
    muscleService
        .searchExerciseByMuscle(searchTerm)
        .then(({ data }) => res.json(data))
        .catch(err => next(err))

});

module.exports = router;
