import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

const style = {
  cursor: 'pointer'
}

class Header extends Component {
  componentDidMount() {
    console.log(`header ${this.props.hotelId} mounted`)
  }
  render() {
    return <div 
      style={style}
      onClick={() => this.props.history.push('/')}
    >
      <h1>HEADER</h1>
    </div>
  }
}

export default withRouter(Header)
