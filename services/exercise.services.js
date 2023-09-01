const axios = require('axios');

class ExerciseService {
    constructor() {
        this.options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': 'd4933db27fmshe2a635668f4aae5p150b73jsnaf2f8586368d',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
    }

    searchExercises(searchTerm) {
        if (searchTerm) {
            return axios.request(this.options)
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    throw error;
                });
        } else {
            return Promise.resolve([]);
        }
    }
}

const exerciseService = new ExerciseService();

module.exports = exerciseService;
