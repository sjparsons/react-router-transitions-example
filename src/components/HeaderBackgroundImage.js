import React, {Component} from 'react'
import bgImage from '../example_bg_image.jpg'; 

const styleBase = {
  color: 'white',
  transition: 'all 200ms ease-out',
  position: 'absolute',
  zIndex: 1000
}

const styleInitial = Object.assign({}, styleBase, {
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  zIndex: '1000',
  display: 'block',
  opacity: 0.5
})

const styleFinal = Object.assign({}, styleBase, {
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  zIndex: '1000',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 1
})


export default class HeaderBackgroundImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      initialStyles: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({initialStyles:false})
    }, 100)
  }

  getStyles() {
    const {initialCoords} = this.props
    const {initialStyles} = this.state
    return initialCoords && initialStyles ? {...initialCoords, ...styleInitial} : 
      {...styleFinal, 
        backgroundImage: initialCoords ? `url("${bgImage}"), ${initialCoords.backgroundImage}` : `url("${bgImage}")`
      }
  }

  render() {
    return <div 
      onClick={() => {this.setState({initialStyles:false})}}
      style={this.getStyles()}></div>
  }
}
