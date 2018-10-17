import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Events from './Events'
import { MapContainer } from './MapContainer';
import "../../css/Events.css"



export default class Category extends Component {
    render() {
        // const styles = {height: "420px"};

        const blockSize = {height: "420px"};

        const description = this.props.events.description
        const title = this.props.events.title
        return (
            <BrowserRouter>
            <div>
                <main className = 'page blog-post'>
                    <section className="clean-block clean-post dark">
                        <div className = 'container' > 
                            <img className = 'post-image' src={this.props.images.regular} alt={`${this.props.events.title}`} />   
                                <div className='block-content' styles={blockSize}>
                            
                                        <Link to={`/${this.props.cityName}/current`}>     
                                            <h2 className='black'>{title}</h2>
                                        </Link>
                                            <div>
                                                <Route exact path={`/${this.props.cityName}/current`} render={() => <Events events={this.props.events} images={this.props.images} />} />    
                                            </div>
                                    
                                </div>
                        </div>
                        
                        
                        
                    </section>    
                </main>

               
                </div>
            </BrowserRouter>
        )
    }
}


