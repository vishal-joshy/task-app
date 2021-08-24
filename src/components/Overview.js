import React from 'react';

class Overview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { task } = this.props;
		return <div>{this.props.task}</div>;
	}
}

export default Overview;
