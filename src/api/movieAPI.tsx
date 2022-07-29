import axios from 'axios';

const movieAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "4f1ec740659a56464be7eccccd5e0abe",
        language: "es-ES"
    }
});

export default movieAPI;