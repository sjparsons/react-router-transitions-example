import React, {Component} from 'react'

import HeaderBackgroundImage from './HeaderBackgroundImage'

const style = {
  color: 'white',
  backgroundColor: 'transparent',
  height: '250px',
  width: '100%',
  top: '0',
  left: '0',
  transition: 'all 500ms cubic-bezier(0.075, 0.820, 0.165, 1.000)',
  position: 'relative'
}

const styleCompact = Object.assign({}, style, {
  height: '100px',
  backgroundColor: '#444'
})


export default class HotelHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowScrolled: false,
      displayHeaderBackgroundImage: false,
      offset: {top: null, left: null}
    }
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
  }

  componentDidMount() {
    console.log(`hotel header mounted`)
    window.addEventListener('scroll', this.handleScrollEvent);
    if (this.container) {
      const {top, left} = this.container.getBoundingClientRect()
      this.setState({displayHeaderBackgroundImage: true, offset: {top, left}})
    } else {
      this.setState({displayHeaderBackgroundImage: true})
    }
  }

  componentWillUnmount() {
    console.log('unmounting hotel header');
    window.removeEventListener('scroll', this.handleScrollEvent);
  }

  handleScrollEvent() {
    const windowScrolled = window.scrollY > 0;
    if (this.state.windowScrolled !== windowScrolled) {
      this.setState({windowScrolled})
    }
  }

  render() {
    const {compact, initialCoords} = this.props
    const {windowScrolled, displayHeaderBackgroundImage, offset} = this.state
    console.log('Rendering hotel header', this.props, this.state)
    return <div style={ compact || windowScrolled ? styleCompact : style}
      ref={ (el) => { this.container = el; }}>
      {displayHeaderBackgroundImage && 
        <HeaderBackgroundImage initialCoords={ initialCoords && {
          ...initialCoords, 
          top: initialCoords.top - offset.top,
          left: initialCoords.left - offset.left 
        }} />}
    </div>
  }
}


