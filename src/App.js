import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Overview title="compoenent Test" />
			</div>
		);
	}
}

export default App;
