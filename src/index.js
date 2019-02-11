import React from "react";
import ReactDOM from "react-dom";

import MovieApp from "./movieApp";

import { Provider } from 'react-redux'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import store from "./redux/store";

library.add(faStar);
library.add(faStarHalfAlt);

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
    <MovieApp />
</Provider>, rootElement);
