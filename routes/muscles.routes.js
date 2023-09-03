const express = require("express");
const router = express.Router();
const muscleService = require("../services/muscles.services");

router.get("/:searchTerm", async (req, res, next) => {
    const { searchTerm } = req.params;

    try {
        const exerciseData = await muscleService.searchExercises(searchTerm);
        res.json({ exerciseData });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
