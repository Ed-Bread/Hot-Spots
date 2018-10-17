import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import "../../css/Events.css"

export class MapContainer extends Component {

  componentDidMount() {
    let foo = document.getElementById("g-map").firstChild
    foo.id = "mapy"
    console.log(foo)
}

  render() {
    const style = {
      width: '10px',
      height: '200px',

    }
    return (
      <div id="g-map">
        <Map google={this.props.google} zoom={14}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.long,
          }}
          >
          <Marker name={'Current location'} />
        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAt1JSfwQioiv6ZVPBokAkt7Uxc6ywxbCM'
})(MapContainer)
