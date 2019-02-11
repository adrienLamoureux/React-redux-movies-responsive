import React from "react";
import * as imageServices from '../services/images';

export default class ProductionCompany extends React.Component {
  
  
  // Initialization
  
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initPicture();
  }


  // DOM

  render(){
    return (
      <div className="col-6 productionCompany-item"> 
        <div>{this.state.picture ? <img className="productionCompany-img" src={this.state.picture} alt='' /> : null }</div>
        <div>{this.props.productionCompany.name}</div>
      </div>
    );
  }

    
  // Internal functions

  initPicture(){
    if(!this.props.productionCompany.logo_path){
      return;
    }
    imageServices.getPictureByPath(this.props.productionCompany.logo_path).then((res) => {
      this.setState(state => ({
        picture: "data:image/jpeg;base64, "+ new Buffer(res.data, 'binary').toString('base64')
      }));
    });
  }

}
