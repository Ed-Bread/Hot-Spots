import React, { Component } from 'react';
import City from './City'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Background from './pic.jpeg';

var sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Background})`
};

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
                    <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                        <div className='container'>
                            <Link className="nav-link" to="/miami">
                                <a className="navbar-brand black">HS</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                            </Link>
                            <div className="collapse navbar-collapse" id="navcol-1">
                                <ul className="nav navbar-nav ml-auto">
                                    <li className='nav-item' role="presentation" onClick={() => { this.setCity('miami') }}>
                                        <Link className="nav-link" to="/miami">Miami</Link>
                                    </li>
                                    <li className='nav-item' role="presentation" onClick={() => { this.setCity('ny') }}>
                                        <Link className="nav-link" to="/ny">New York</Link>
                                    </li>
                                    <li className='nav-item' role="presentation" onClick={() => { this.setCity('los+angeles') }} >
                                        <Link className="nav-link" to="/los+angeles">Los Angeles</Link>
                                    </li>


                                    <li className="dropdown"><a className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false">Categories</a>
                                        <div className="dropdown-menu" role="menu">


                                            <Link className='dropdown-item' role='presentation' onClick={() => { this.setCategory('') }} to={`${this.state.cityName}`}>All</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('music') }} to="/music">Concerts</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('comedy') }} to="/comedy">Comedy</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('movies') }} to="/film">Film</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('food') }} to="/wine">Food &amp; Wine</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('art') }} to="/art">Art Galleries &amp; Exhibits</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('books') }} to="/books">Literary &amp; Books</Link>

                                            <Link className="dropdown-item" role="presentation" onClick={() => { this.setCategory('nightlife') }} to="/nightlife">Nightlife </Link>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </  nav>


                    {/* City Info */}
                    <Route exact path="/" render={() =>
                        <div className="page landing-page">
                            <section className="clean-block clean-hero" style={sectionStyle} >
                                <div className='text'>
                                    <h2>HOT SPOT</h2>
                                    <p>Ready When You Are</p>
                                    <Link className="nav-link" to="/miami">
                                        <button class="btn btn-outline-light btn-lg" type="button">GO</button>
                                    </Link>
                                </div>
                            </section>
                        </div>
                    } />
                    <Route exact path="/miami" render={() => <City cityName={this.state.cityName} />} />
                    <Route path="/ny" render={() => <City cityName={this.state.cityName} />} />
                    <Route path="/los+angeles" render={() => <City cityName={this.state.cityName} />} />
                    {/* Category Info */}
                    <Route path="/music" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
                    <Route path="/comedy" render={() => <City cityName={this.state.cityName} category={this.state.category} />} />
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

