import axios from 'axios';
import * as config from "../config";

export const getMovieList = () => {
    return axios.get(config.API_MOVIE_DOMAIN+"/3/discover/movie?sort_by=popularity.desc&api_key="+config.API_KEY_MOVIE);
}

export const getMovieById = (id) => {
    return axios.get(config.API_MOVIE_DOMAIN+"/3/movie/"+id+"?api_key="+config.API_KEY_MOVIE);
}