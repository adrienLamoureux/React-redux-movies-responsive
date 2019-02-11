import { INIT_MOVIES } from "../actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case INIT_MOVIES: {
        return {
            ...state,
            ...action.movies
        };
    }
    default:
        return state;
  }
}
