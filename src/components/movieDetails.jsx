import React from "react";
import ProductionCompany from "./productionCompany";
import * as movieServices from "../services/movies";

export default class MovieDetails extends React.Component {
  
  
  // Initialization

  constructor(props){
    super(props);
    this.state = {movie: {}};
  }


  componentDidMount(){
    this.initMovie();
  }

  // DOM

  render(){
    return (
      <div className="movie-details">
        <div className="movie-synopsis">Overview</div>
        <div className="movie-overview">{this.state.movie.overview}</div>
        <div className="movie-production">Produced by</div>
        <div className="productionCompany-list row">
        {this.state.movie.production_companies && this.state.movie.production_companies.length
          ? this.state.movie.production_companies.map((productionCompany, index) => {
              return <ProductionCompany key={`productionCompany-${productionCompany.id}`} productionCompany={productionCompany} />;
            })
          : ""}
        </div>
      </div>
    );
  }


  // Internal functions

  initMovie(){
    movieServices.getMovieById(this.props.id).then((res) => {
      this.setState(state => ({
        movie: res.data
      }));
    });
  }
}