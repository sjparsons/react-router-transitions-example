import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const style = {
  display: "inline-block",
  width: "75%",
  position: "relative",
  background: "green",
  height: '1000px'
}
export default class HotelRooms extends Component {
  componentDidMount() {
    console.log(`hotel rooms mounted`)
  }
  render() {
    return (<div style={style}>
      Hotel rooms
      <ul>
        <li><Link to="/hotel/HE123/checkout">Room 1</Link></li>
        <li><Link to="/hotel/HE123/checkout">Room 2</Link></li>
        <li><Link to="/hotel/HE123/checkout">Room 3</Link></li>
      </ul>
    </div>)
  }
}
