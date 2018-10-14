import React, { Component } from 'react';
import Event from './Event'

export default class Category extends Component {
    render() {
        return (
            <div>
                {this.props.events.map((e, i) => {
                    <Event Events={e} Key={i} />
                })}
            </div>
        )
    }
}