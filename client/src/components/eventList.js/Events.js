import React, { Component } from 'react';
import MapContainer from './MapContainer';
import "../../css/Events.css"

export default class Events extends Component {

    render() {
        return (
            <div className="event">
                <p>{this.props.events.description ? this.props.events.description : 'No Description Avaliable'}</p>
                <p>Get more information <a href={this.props.events.venue_url}>here!</a></p>
                <h4>Location:{this.props.events.venue_address},{this.props.events.city_name}, {this.props.events.region_name}</h4>
                <MapContainer long={this.props.events.longitude} lat={this.props.events.latitude} />
            </div>
        )
    }
}
