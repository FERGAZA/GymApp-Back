const axios = require('axios');

class MuscleService {
    constructor() {
        this.api = axios.create({
            baseURL: `https://exercisedb.p.rapidapi.com/exercises/target`
        })
        this.options = {
            headers: {
                'X-RapidAPI-Key': `${process.env.API_KEY}`,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
    }

    searchExerciseByMuscle(muscle) {
        return this.api.get(`/${muscle}`, this.options)
    }

}

const muscleService = new MuscleService();

module.exports = muscleService;
