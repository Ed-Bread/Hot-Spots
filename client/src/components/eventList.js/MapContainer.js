import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const style = {
  width: '60%',
  height: '60%',

}
    return (
    
      <Map google={this.props.google} zoom={14}
      initialCenter={{
            lat: this.props.lat,
            lng: this.props.long,
          }}
style={style}
      >


        <Marker
                name={'Current location'} />


      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAt1JSfwQioiv6ZVPBokAkt7Uxc6ywxbCM'
})(MapContainer)
