import * as React from "react";
import MovieList from "./components/movieList";
import "./styles.css";
import HomeHeader from "./components/homeHeader";
import HomeFooter from "./components/homeFooter";

export default function MovieApp() {
  return (
    <div className="movie-app">
      <HomeHeader/>
      <MovieList/>
      <HomeFooter/>
    </div>
  );
}
