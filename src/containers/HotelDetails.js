import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import HotelHeader from '../components/HotelHeader'
import HotelSidebar from '../components/HotelSidebar'
import HotelRooms from '../components/HotelRooms'
import CheckoutDetails from '../components/CheckoutDetails'

const style = { 
  left: '25%', 
  position: 'relative',
  transition: 'left 400ms cubic-bezier(0.075, 0.820, 0.165, 1.000),' +
              'opacity 1000ms cubic-bezier(0.075, 0.820, 0.165, 1.000) 500ms',
  opacity: 0
}

const styleCheckout = Object.assign({}, style, {
  left: '0', 
});


export default class HotelDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _isMounted: false
    }
  }
  componentDidMount() {
    console.log(`hotel details route container mounted`)
    window.scrollTo(0, 0)
    this.setState({_isMounted:true})
  }

  getStyles(isCheckout) {
    const styles = isCheckout ? styleCheckout : style
    return this.state._isMounted ? {...styles, opacity: 1} : styles
  }

  render() {
    const {match, location} = this.props
    console.log(location)
    const headerInitialCoords = (location.state && location.state.prevElementCoords) || null
    return (
      <Route path={`${match.url}/checkout`} children={({ match }) => {
        const isCheckout  = match ? true : false;
        return (
          <div style={{overflow: 'hidden'}}>
            <HotelHeader compact={isCheckout} initialCoords={headerInitialCoords} />
            <div style={this.getStyles(isCheckout)}>
              <HotelSidebar />
              <HotelRooms selected={isCheckout}/>
              { isCheckout && <CheckoutDetails />}
            </div>
          </div>)
      }} />
    );
  }
}

