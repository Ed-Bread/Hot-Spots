import React from 'react';
class Event extends React.Component {
	constructor() {
		super();
		this.state = {
			:
		}
	}
  <Events />
	async componentDidMount() {
		let movies = [];
		let {data: movie1} = await axios.get('/movies/1');
		movies.push(movie1);
		this.setState({movies});
		let {data: movie2} = await axios.get('/movies/2');
		movies.push(movie2);
		this.setState({movies});
		let {data: movie3} = await axios.get('/movies/3');
		movies.push(movie3);
		this.setState({movies});
	}

	render() {
		return <MapContainer ={this.state.movies} />
	}
}

export default Event;
