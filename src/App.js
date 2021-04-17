import React, { Component, Fragment } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Products/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;
