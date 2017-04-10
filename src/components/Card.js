import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import bgImage from '../example_bg_image_small.jpg'; 

const style={
  transition: 'all 0.5s ease',
  display: 'inline-block',
  height: '200px',
  width: '200px',
  backgroundImage: `url("${bgImage}")`,
  backgroundSize: 'cover',
  padding: '20px',
  marginRight: '40px',
  boxSizing: 'border-box',
  cursor: 'pointer'
}

class Card extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log(`card ${this.props.hotel.id} mounted`)
    console.log('div dimensions', this.node && this.node.getBoundingClientRect());
  }

  handleClick() {
    const {hotel, history} = this.props
    console.log(`card with hotel id ${hotel.id} clicked`)
    let locationState
    if (this.container) {
      const rect = this.container.getBoundingClientRect()
      console.log('card bounding rect', rect)
      if (rect) {
        const {top, bottom, right, left, width, height} = rect
        locationState = { prevElementCoords: {top, bottom, right, left, width, height, 
          backgroundImage: style.backgroundImage} }
      }
    }
    console.log('pushing location to history', location)
    history.push(`/hotel/${hotel.id}`, locationState)
  }

  render() {
    const {name} = this.props.hotel
    console.log('rendering card');
    return (
      <div 
        style={style}
        ref={ (el) => { this.container = el }}
        onClick={ this.handleClick }
      >
        <h2>{name}</h2>
      </div>
    )
  }
}

export default withRouter(Card)