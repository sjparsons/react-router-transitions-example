import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './containers/Home'
import HotelDetails from './containers/HotelDetails'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/hotel/:hotelId" component={HotelDetails} />  
        </div>
      </Router>
      
    );
  }
}

export default App;
