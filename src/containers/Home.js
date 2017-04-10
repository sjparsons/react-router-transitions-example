import React, {Component} from 'react'

import Search from '../components/Search'
import Suggestions from '../components/Suggestions'

const hotel_suggestions1 = [
  {id: 1, name: "Hotel 1"},
  {id: 2, name: "Hotel 2"},
  {id: 3, name: "Hotel 3"}
]

const hotel_suggestions2 = [
  {id: 4, name: "Hotel 4"},
  {id: 5, name: "Hotel 5"},
  {id: 6, name: "Hotel 6"}
]

export default class Home extends Component {
  componentDidMount() {
    console.log(`home route container mounted`)
  }
  render() {
    return (
      <div>
        <Search />
        <Suggestions 
          suggestions={hotel_suggestions1}
          recommendations={hotel_suggestions2}
        />
      </div>
    );
  }
}
