import React from "react";
import MovieDetails from "./movieDetails";
import { Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as imageServices from '../services/images';

export default class Movie extends React.Component {
  

  // Initialization

  constructor(props){
    super(props);
    this.state = { details: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.initVotes();
    this.initPicture();
  }

  
  // DOM

  render(){
    return (
      <div onClick={() => {this.handleClick()}}>
        {this.movieCardDesktopRender()}
        {this.movieCardMobileRender()}
      </div>
    );
  }

  movieCardDesktopRender(){
    return (
      <Card className="card hide-large">
        <div className="row">
          <div className="col-sm-4 col-3 image-block">
            {this.state.picture ? <img className="movie-img" src={this.state.picture} alt='' /> : null }
          </div>
          <div className="col-sm-8 col-9 card-block">
            {this.movieCardHeaderRender()}
            {this.movieCardBodyRender()}
          </div>
        </div>
        {this.movieDetailsRender()}
      </Card>
    );
  }

  movieCardMobileRender(){
    return (
      <Card className="card hide-small">
          {this.state.picture ? <Card.Img position="top" src={this.state.picture} alt=""></Card.Img> : null }
          {this.movieCardHeaderRender()}
          {this.movieCardBodyRender()}
          {this.movieDetailsRender()}
       </Card>
    );
  }

  movieCardHeaderRender(){
    return (
      <Card.Header className="movie-title">{this.props.movie.title}</Card.Header>
    );
  }

  movieCardBodyRender() {
    return (
      <Card.Body>
        <Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Released: {this.props.movie.release_date}</ListGroup.Item>
            <ListGroup.Item className="movie-vote">Vote average: <ul className="movie-vote-star">{this.state.votes}</ul></ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    );
  }

  movieDetailsRender(){
    return (
      <div className="col-12">
        {this.state.details ? <MovieDetails key={`movie-${this.props.movie.id}`} id={this.props.movie.id}/> : null}
      </div>
    );
  }


  // Events

  handleClick(){
    this.setState(state => ({
      details: !state.details
    }));
  }


  // Internal functions

  initVotes(){
    let votes = [];
    for(let i=0;i<this.props.movie.vote_average;++i){
      if(i+1 >= this.props.movie.vote_average){
        if((i+1-this.props.movie.vote_average) < 0.75){
          if((i+1-this.props.movie.vote_average) > 0.25){
            votes.push(<FontAwesomeIcon icon="star-half-alt" className="movie-vote-star-item"/>);
          } else {
            votes.push(<FontAwesomeIcon icon="star" className="movie-vote-star-item"/>);
          }
          break;
        }
      } else{
        votes.push(<FontAwesomeIcon icon="star" className="movie-vote-star-item"/>);
      }
    }
    this.setState(state => ({
      votes: votes
    }));
  }

  initPicture(){
    imageServices.getPictureByPath(this.props.movie.poster_path).then((res) => {
      this.setState(state => ({
        picture: "data:image/jpeg;base64, "+ new Buffer(res.data, 'binary').toString('base64')
      }));
    });
  }
}