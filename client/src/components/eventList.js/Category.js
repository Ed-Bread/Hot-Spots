import React, { Component } from 'react';
import Events from './Events'

export default class Category extends Component {
    render() {
        return (
            <div>
                <h1>Category</h1>
                {this.props.events.map((e, i) => {
                    <Events Events={e} Key={i} />
                })}
            </div>
        )
    }
}