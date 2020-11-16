import React, { Component } from 'react';

import AppHeader from '../app-header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

import './app.css';

export default class App extends Component {

	state = {
		todoData: [
			{label: 'Complited tusk', state: 'active', id: 1},
			{label: 'Editing tusk', state: 'active', id: 2},
			{label: 'Active tusk', state: 'active', id: 3},
		],

		show: 'all'
	}

	clearCompleted = () => {
		this.setState(({todoData}) => {
			let newTodoData = todoData.filter(elem => {
				if (elem.state === 'active') return elem;
			})

			return {
				todoData: newTodoData
			}
		})
	}

	filterBy = (data, value) => {
		if (value === 'all') return data;
		const newArr = data.filter(elem => {
			if (elem.state === value) return elem;
		});
		return newArr;
	}

	filterAll = () => {
		this.setState(({show}) => {
			return {
				show: 'all'
			}
		})
	}

	filterCompleted = () => {
		this.setState(({show}) => {
			return {
				show: 'completed'
			}
		})
	}

	filterActive = () => {
		this.setState(({show}) => {
			return {
				show: 'active'
			}
		})
	}
	

	addTusk = (text) => {
		this.setState(({todoData}) => {
			const newTusk = {
				label: text, state: 'active', id: todoData.length + 1
			}

			return {
				todoData: [...todoData, newTusk]
			}
		})
	}

	changeOfState = (id) => {
		this.setState(({ todoData }) => {
			const ind = todoData.findIndex(elem => elem.id === id);

			const element = todoData[ind];

			if (element.state === 'completed') {
				element.state = 'active';
			} else element.state = 'completed';

			const newState = [
			...todoData.slice(0, ind),
			element,
			...todoData.slice(ind + 1)
			]

			return {
				todoData: newState
			}
		})
	}

	onDeleted = (id) => {
		this.setState(({ todoData }) => {
			const ind = todoData.findIndex(elem => elem.id === id);

			const newState = [
			...todoData.slice(0, ind),
			...todoData.slice(ind + 1)
			]

			return {
				todoData: newState
			}
		})
	}

	

	render() {
		return (
			<section className="todoapp">
				<header className="header">
					<AppHeader />
					<NewTaskForm addTusk={this.addTusk} />
				</header> 
				<section className="main">
					<TaskList 
					todos={this.filterBy(this.state.todoData, this.state.show)}
					changeOfState={ this.changeOfState }
					onDeleted={ this.onDeleted } />
				</section>
				<Footer 
				todos={this.state.todoData}
				filterAll={ this.filterAll }
				filterCompleted={ this.filterCompleted }
				filterActive={ this.filterActive }
				clearCompleted= { this.clearCompleted } />
			</section>
		);
	}
};

