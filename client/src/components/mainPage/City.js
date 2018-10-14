import React, { Component } from 'react';
import Category from '../eventList.js/Category'
import axios from 'axios'

export default class City extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    }
    async componentDidMount() {
        const { data } = await axios.get(`/events/${this.props.cityName}`)
        this.setState({ events: data })
    }
    render() {
        const catagories = this.state.events[0]
        catagories ? console.log(catagories.events.event) : null
        return (
            <React.Fragment>
                <h1>Hot Spots!</h1>
                {/* {catagories.map((e, i) => {
                    return <Category events={e} key={i} />
                })} */}
            </React.Fragment>
        )
    }
}