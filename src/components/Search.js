import React, {Component} from 'react'

const style = {

}

export default class Search extends Component {
  componentDidMount() {
    console.log(`Search ${this.props.hotelId} mounted`)
  }
  render() {
    return <div style={style}>
      <p>Search</p>
    </div>
  }
}
