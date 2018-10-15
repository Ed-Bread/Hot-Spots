import React, { Component } from 'react';

export default class Events extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.events.title}</h2>
                <p>{this.props.events.description ? this.props.events.description : 'No Description Avaliable'}</p>
                <p>Get more information <a href={this.props.events.venue_url}>here!</a></p>

                <h4>Location:{this.props.events.venue_address},{this.props.events.city_name}, {this.props.events.region_name}</h4>
                {/* {Space for Map} */}
            </div>
        )
    }
}
