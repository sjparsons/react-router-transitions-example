import React, {Component} from 'react'

const style = {
  display: "inline-block",
  width: "25%",
  position: "absolute",
  left: '-25%',
  background: "blue"
}

export default class HotelSidebar extends Component {
  componentDidMount() {
    console.log(`hotel sidebar mounted`)
  }
  render() {
    return (<div style={style}>
      Sidebar asdfkladf aldksfa dsflaksdjf asd falsdkf jalsdkf jasd falsdk fjasd fasd falsdkfasd fasldk fas dfalsdk fasdl fasdlk fal sdf
    </div>)
  }
}
