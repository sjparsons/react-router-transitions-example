import React, {Component} from 'react'

import Card from './Card'

const style = {

}

export default class Suggestions extends Component {
  componentDidMount() {
    console.log(`Search ${this.props.hotelId} mounted`)
  }
  render() {
    const {suggestions, recommendations} = this.props
    return <div style={style}>
      <div>
        <h2>Suggestions</h2>
        { suggestions.map( hotel => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div>
        <h2>Recommendations</h2>
        { recommendations.map( hotel => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  }
}
