import React from 'react';

class Overview extends React.Component {
	constructor(props) {
		super(props);
	}
    
	render() {
		return <div>{this.props.title}</div>;
	}
}

export default Overview;
