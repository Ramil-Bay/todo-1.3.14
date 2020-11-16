import React, {Component} from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {

	state = {
		label: ''
	};

	onAddNewTask = (e) => {
		this.setState({
			label: e.target.value
		})
	};

	onSubmit = (e) => {
		e.preventDefault();
		if(this.state.label){
			this.props.addTusk(this.state.label);
			this.setState({
				label: ''
			})
		}
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input 
				type="text" 
				className="new-todo"
				placeholder="What needs to be done?" 
				autoFocus
				onChange={this.onAddNewTask} 
				value={this.state.label} />
			</form> 
		)
	}
};
