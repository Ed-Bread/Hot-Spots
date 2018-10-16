import React, { Component } from 'react';
import City from './City'
import { BrowserRouter, Route, Link } from "react-router-dom";


export default class Cities extends Component {
    constructor() {
        super()
        this.state = {
            cityName: ['miami'],
            category: []
        }
        this.setCategory = this.setCategory.bind(this)
        this.setCity = this.setCity.bind(this)
    }
    setCategory(name) {
        this.setState({ category: name })
    }
    setCity(name) {
        this.setState({ cityName: name })
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1> Find Events </h1>
                    <ul>
                        <li onClick={() => { this.setCity('miami') }}>
                            <Link to="/miami">Miami</Link>
                        </li>
                        <li onClick={() => { this.setCity('ny') }}>
                            <Link to="/ny">New York</Link>
                        </li>
                        <li onClick={() => { this.setCity('los+angeles') }} >
                            <Link to="/los+angeles">Los Angeles</Link>
                        </li>
                    </ul>
                    <hr />
                    <h1>Categories</h1>
                    <ul>
                        <li onClick={() => { this.setCategory('') }} >
                            <Link to={`${this.state.cityName}`}>All</Link>
                        </li>
                        <li onClick={() => { this.setCategory('music') }} >
                            <Link to="/music">Concerts</Link>
                        </li>
                        <li onClick={() => { this.setCategory('education') }} >
                            <Link to="/education">Education</Link>
                        </li>
                        <li onClick={() => { this.setCategory('movies') }} >
                            <Link to="/film">Film</Link>
                        </li>
                        <li onClick={() => { this.setCategory('food') }} >
                            <Link to="/wine">Food &amp; Wine</Link>
                        </li>
                        <li onClick={() => { this.setCategory('art') }} >
                            <Link to="/art">Art Galleries &amp; Exhibits</Link>
                        </li>
                        <li onClick={() => { this.setCategory('books') }} >
                            <Link to="/books">Literary &amp; Books</Link>
                        </li>
                        <li onClick={() => { this.setCategory('nightlife') }} >
                            <Link to="/nightlife">Nightlife &amp; Singles</Link>
                        </li>
                    </ul>
                    {/* City Info */}
                    <Route exact path="/miami" render={() => <City cityName={this.state.cityName} />} />
                    <Route path="/ny" render={() => <City cityName={this.state.cityName} />} />
                    <Route path="/los+angeles" render={() => <City cityName={this.state.cityName} />} />
                    {/* Category Info */}
                    <Route path="/music" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/education" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/film" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/wine" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/art" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/books" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/nightlife" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/science" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                </div >
            </BrowserRouter >
        );
    }
}