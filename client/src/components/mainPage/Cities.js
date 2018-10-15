import React, { Component } from 'react';
import City from './City'
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Cities extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1> Find Events </h1>
                    <ul>
                        <li className="miami">
                            <Link to="/">Miami</Link>
                        </li>
                        <li className="newYork">
                            <Link to="/newYork">New York</Link>
                        </li>
                        <li className='La'>
                            <Link to="/La">Los Angeles</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route exact path="/" render={() => <City cityName="miami" />} />
                    <Route path="/newYork" render={() => <City cityName="ny" />} />
                    <Route path="/La" render={() => <City cityName="los+angeles" />} />
                </div >
            </BrowserRouter >
        );
    }
}