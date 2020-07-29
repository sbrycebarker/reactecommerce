import React, { Component } from 'react';
import Front from '../../media/front.jpeg';

export default class navbar extends Component {
  render() {
    return (
      <div className="container responsive">
        <nav className="navbar border-bottom responsive"> 
          <h1>Home</h1>
          <h2>Login</h2>
          <h2>Menu</h2>
        </nav> 
      <h1 className="text-center font-weight-light">WELCOME TO MY SITE</h1>
        <img src={Front} 
        alt="Responsive" 
        className="Responsive" 
        />    
      </div>   
    )
  }
}
