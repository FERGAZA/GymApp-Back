const axios = require('axios');

class MuscleService {
    constructor() {
        this.options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': `${process.env.API_KEY}`,
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

const exerciseService = new MuscleService();

module.exports = exerciseService;
