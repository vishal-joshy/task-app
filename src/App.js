import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<form>
					<label>Input task Name</label>
					<input type="text" placeholder="eg. Task 1"></input>
					<button type="submit">Add Task</button>
				</form>
				<div>
					<h3>Task List</h3>
					<Overview title="component Test" />
				</div>
			</div>
		);
	}
}

export default App;
