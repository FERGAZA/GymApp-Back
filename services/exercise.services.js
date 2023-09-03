const axios = require('axios');

class ExerciseService {
    constructor() {
        this.api = axios.create({
            baseURL: `https://exercisedb.p.rapidapi.com/exercises/name`
        })
        this.options = {
            headers: {
                'X-RapidAPI-Key': `${process.env.API_KEY}`,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
    }

    searchExercise(exercise) {
        return this.api.get(`/${exercise}`, this.options)
    }

}

const exerciseService = new ExerciseService();

module.exports = exerciseService;
