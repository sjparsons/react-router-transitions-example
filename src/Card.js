import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

export default class Card extends Component {
  componentDidMount() {
    console.log(`card ${this.props.hotelId} mounted`)
  }
  render() {
    return (<div className={`card card--${this.props.view}`}>
      <h2><Link to={`/hotel/${this.props.hotelId}`}>Hotel #{this.props.hotelId}</Link></h2>
    </div>)
  }
}
