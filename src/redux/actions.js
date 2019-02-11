import { INIT_MOVIES } from "./actionTypes";
import * as movieServices from '../services/movies';

export const loadMovies = () => {
  return(dispatch) => {
    return movieServices.getMovieList().then((response) => {
      dispatch(initMovies(response.data));
    }).catch(error => {
      throw(error);
    });
  }
}

export function initMovies(movies){
  return {
    type: INIT_MOVIES,
    movies
  }
}