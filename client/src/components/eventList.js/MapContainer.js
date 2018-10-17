import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
 state = {
    showingInfoWindow: false,
    activeMarker: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

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
        style={style}>
        <Marker name={'Current location'}
                onClick={this.onMarkerClick}/>
          <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                      <div>
                        <h1>{this.props.title}</h1>
                        <address>
                          {this.props.address}<br/>
                          {this.props.city}, {this.props.region}
                        </address>
                      </div>
                  </InfoWindow>

      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAt1JSfwQioiv6ZVPBokAkt7Uxc6ywxbCM'
})(MapContainer)
