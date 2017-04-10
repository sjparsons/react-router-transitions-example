import React, {Component} from 'react'

const style = {
  display: "inline-block",
  width: "25%",
  position: "relative",
  background: "red",
  verticalAlign: 'top'
}

export default class CheckoutDetails extends Component {
  componentDidMount() {
    console.log(`checkout details mounted`)
  }
  render() {
    return (<div style={style}>
      CheckoutDetails
    </div>)
  }
}
