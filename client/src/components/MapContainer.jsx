import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
// import ReactDOM from 'react-dom'

class MapContainer extends Component {

  render() {
    // if (this.props.lat === "" || this.props.lng === "") {
    //   console.log("Not loaded")
    //   return (
    //     <div>Not loaded yet</div>
    //   )
    // }
    const style = {
      width: '100%',
      height: '80%'
    }
    return (
      <Map google={this.props.google} style={style}
        initialCenter={{
        //   lat: parseFloat(this.props.lat),
        //   lng: parseFloat(this.props.lng),
          lat:parseFloat("33.878755"),
          lng:parseFloat("-84.5060817")
          
        }}
        zoom={4}>
        <Marker 
          name={'Current location'}
          />

      </Map>

    )

  }
}




export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-rlQ66IBXabgS9qBZyuWqRLlfoecdH0M'
})(MapContainer)