import React, { Component } from 'react';
import Front from '../../media/front.jpeg';

export default class navbar extends Component {
  render() {
    return (
      <div> 
      <h1 className="text-center font-weight-light">WELCOME TO MY SITE</h1>
        <img src={Front} 
        alt="Responsive" 
        className="Responsive" 
        />    
      </div>   
    )
  }
}
