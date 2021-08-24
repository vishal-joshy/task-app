import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
		};

		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onTaskInput = this.onTaskInput.bind(this);
	}

	onSubmitForm(e) {
		e.preventDefault();
		console.log(this.state.inputValue);
	}
	onTaskInput(e) {
		this.setState({
			inputValue: e.target.value,
		});
	}

	render() {
		return (
			<div>
				<form>
					<label>Input task Name</label>
					<input type="text" placeholder="eg. Task 1" onChange={this.onTaskInput}></input>
					<button type="submit" onClick={this.onSubmitForm}>
						Add Task
					</button>
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
