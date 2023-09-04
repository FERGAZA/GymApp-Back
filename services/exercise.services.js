const axios = require('axios');

class ExerciseService {
    constructor() {
        this.api = axios.create({
            baseURL: `https://exercisedb.p.rapidapi.com/exercises/`
        })
        this.options = {
            headers: {
                'X-RapidAPI-Key': `${process.env.API_KEY}`,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
    }

    searchExercise(exercise) {
        return this.api.get(`/name/${exercise}`, this.options)
    }

    searchExerciseById(exercise_id) {
        return this.api.get(`/exercise/${exercise_id}`, this.options)
    }

}

const exerciseService = new ExerciseService()

module.exports = exerciseService
