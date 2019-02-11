import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { loadMovies } from './actions';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(loadMovies());

export default store;