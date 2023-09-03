const axios = require('axios');

class ExerciseService {
    constructor() {

        this.axiosApp = axios.create({
            baseUrl: 'https://exercisedb.p.rapidapi.com/'

        })
        this.options = {
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
    }

    searchExercises() {
        return this.axiosApp.get(`/exercises`, this.options)
    }

    searchExercisesByMuscle() {

    }
}

const exerciseService = new ExerciseService();

module.exports = exerciseService;
