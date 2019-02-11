import React from "react";
import Movie from "./movie";
import { connect } from "react-redux";

class MovieList extends React.Component {
  render(){
    return (
      <div className="movie-list col-12">
        <div className="row">
          {this.props.movies.results && this.props.movies.results.length
            ? this.props.movies.results.map((movie, index) => {
                return <div className="movie-item col-xl-4 col-sm-6 col-12"><Movie key={`movie-${movie.id}`} movie={movie} /></div>;
              })
            : ""}
          </div>
      </div>
    )};
}

const mapStateToProps = function(state) {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieList);
