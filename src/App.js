import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			tasks: [],
		};

		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onTaskInput = this.onTaskInput.bind(this);
	}

	onSubmitForm(e) {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.inputValue), //Array.push is mutable use concat on state
			inputValue: '',
		});
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
					<input
						type="text"
						placeholder="eg. Task 1"
						value={this.state.inputValue}
						onChange={this.onTaskInput}
					></input>
					<button type="submit" onClick={this.onSubmitForm}>
						Add Task
					</button>
				</form>
				<div>
					<h3>Task List</h3>
					<Overview tasks={this.state.tasks} />
				</div>
			</div>
		);
	}
}

export default App;
