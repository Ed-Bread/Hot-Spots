import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Events from './Events'


export default class Category extends Component {
    render() {
        const description = this.props.events.description
        const title = this.props.events.title
        return (
            <BrowserRouter>
                <div>
                    <Link to={`/${this.props.cityName}/current`}>
                        <div>
                            <img src={this.props.images.thumb} alt={`${this.props.events.title}`} />
                            <h2>{title ? title.substring(0, 30) : null}...</h2>
                            <p>{description ? description.substring(0, 150) : null}...</p>
                        </div>
                    </Link>
                    <Route exact path={`/${this.props.cityName}/current`} render={() => <Events events={this.props.events} images={this.props.images} />} />
                </div>
            </BrowserRouter>
        )
    }
}
