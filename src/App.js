import React from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: {
				taskNumber: 0,
				text: '',
				id: uniqid(),
			},
			tasks: [],
		};

		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.onTaskInput = this.onTaskInput.bind(this);
	}

	onSubmitForm(e) {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.inputValue), //Array.push is mutable use concat on state
			inputValue: {
				taskNumber: this.state.inputValue.taskNumber + 1,
				text: '',
				id: uniqid(),
			},
		});
		console.log(this.state.tasks);
	}
	onTaskInput(e) {
		this.setState({
			inputValue: {
				text: e.target.value,
				id: this.state.inputValue.id,
				taskNumber: this.state.inputValue.taskNumber,
			},
		});
		console.log(this.state.inputValue.taskNumber);
	}

	render() {
		return (
			<div>
				<form>
					<label>Input task Name</label>
					<input
						type="text"
						placeholder="eg. Task 1"
						value={this.state.inputValue.text}
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
