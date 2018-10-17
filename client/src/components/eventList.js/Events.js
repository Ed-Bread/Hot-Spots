import React, { Component } from 'react';
import MapContainer from './MapContainer';
import "../../css/Events.css"

export default class Events extends Component {

    render() {
        return (
            <div className="event">
                <p>{this.props.events.description ? `${this.props.events.description.substring(0, 400)}...` : 'No Description Avaliable'}</p>
                <p>Get more information <a href={this.props.events.venue_url}>here!</a></p>
                <h4>Location:{this.props.events.venue_address},{this.props.events.city_name}, {this.props.events.region_name}</h4>
                <div className="map">
                    <MapContainer address={this.props.events.venue_address} city={this.props.events.city_name} region={this.props.events.region_name} title={this.props.events.title} long={this.props.events.longitude} lat={this.props.events.latitude} />
                </div>
            </div>
        )
    }
}
