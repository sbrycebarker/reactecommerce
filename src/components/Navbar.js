import React, { Component } from 'react';

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        { this.props.children }
        <h1>WELCOME TO MY SITE</h1>
      </nav>
    )
  }
}
