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
        if (this.props.category) {
            console.log(this.state.category)
            const { data } = await axios.get(`/events/${this.props.cityName}/category/${this.props.category}`)
            const { data: images } = await axios.get(`/img/${this.props.category}`)
            this.setState({ events: data, images })
        } else {
            const { data } = await axios.get(`/events/${this.props.cityName}`)
            const { data: images } = await axios.get(`/img/${this.props.cityName}`)
            this.setState({ events: data, images })
        }
    }
    render() {
        const butt = this.state.events[0]
        const images = this.state.images[0]
        if (images && butt) {
            return (
                <React.Fragment>
                    <h1>Hot Spots!</h1>
                    {butt.events.event.map((e, i) => {
                        return <Category events={e} cityName={this.props.cityName} images={images.results[i].urls} key={i} />
                    })}
                </React.Fragment>
            )
        } else {
            return <Loader />
        }
    }
}
