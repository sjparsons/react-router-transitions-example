import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Card from './Card'
import HotelSidebar from './HotelSidebar'

const hotels = [
  {id: 1, name: "Hotel 1"},
  {id: 2, name: "Hotel 2"},
  {id: 3, name: "Hotel 3"}
]

class App extends Component {
  render() {
    return (
      <Router>
        <Route children={({ location }) => (
          
          <div>

            <h1>Header</h1>

            <div>Select box + date picker</div>

            <div>
              <Route
                path="/hotel/:hotelId"
                children={({match}) => {
                  return <div className="card__container">
                  { hotels.map(hotel => {
                    const thisHotel = match && Number(match.params.hotelId) === hotel.id
                    return <Card key={hotel.id} hotelId={hotel.id} view={match ? (thisHotel ? "open" : "null") : "base"}/>
                  })}
                  </div>
                }}
              />
            </div>

            <Route
                path="/hotel/:hotelId"
                component={HotelSidebar}
              />
          </div>
          

        )} />
  
      </Router>
    );
  }
}

export default App;
