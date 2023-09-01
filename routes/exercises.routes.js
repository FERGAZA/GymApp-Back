const express = require("express");
const router = express.Router();
const exerciseService = require("../services/exercise.services");

router.get("/:searchTerm", async (req, res, next) => {
    const { searchTerm } = req.params;

    try {
        const exerciseData = await exerciseService.searchExercises(searchTerm);
        res.json({ exerciseData });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
