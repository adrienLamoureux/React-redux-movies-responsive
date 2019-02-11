import React from "react";

export default class HomeHeader extends React.Component {
  render(){
    return (
      <div className="home-header">
        <div className="home-title">Showtime movies</div>
        <div className="home-subtitle">Selected by fans for fans</div>
        <div className="home-content">Your 20 favorites movies, available 24/7 in our new cinema</div>
      </div>
    );
  }
}