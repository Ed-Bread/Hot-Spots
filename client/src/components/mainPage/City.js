import React, { Component } from 'react';
import Category from '../eventList.js/Category'
import axios from 'axios'
import Loader from '../Loader'
export default class City extends Component {
    constructor() {
        super();
        this.state = {
            events: [],
            images: []
        }
    }
    async componentDidMount() {
        const { data } = await axios.get(`/events/${this.props.cityName}`)
        this.setState({ events: data })
        const { data: images } = await axios.get(`/img/${this.props.cityName}`)
        this.setState({ images })
    }
    render() {
        const catagories = this.state.events[0]
        const images = this.state.images[0]
        if (images && catagories) {
            return (
                <React.Fragment>
                    <h1>Hot Spots!</h1>
                    {catagories.events.event.map((e, i) => {
                        return <Category events={e} cityName={this.props.cityName} images={images.results[i].urls} key={i} />
                    })}
                </React.Fragment>
            )
        } else {
            return <Loader />
        }
    }
}
