import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./HotelSidebar.css"

export default class HotelSidebar extends Component {
  componentDidMount() {
    console.log(`hotel sidebar mounted`)
  }
  render() {
    return (<div className="hotel-sidebar">
      Sidebar
    </div>)
  }
}
