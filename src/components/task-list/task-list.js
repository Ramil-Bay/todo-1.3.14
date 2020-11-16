import React from 'react';

import Task from '../task';

import './task-list.css';

const TaskList = ({ todos, changeOfState, onDeleted }) => {
	const elements = todos.map(elem => {
		const {state, id} = elem;

		return (
			<li key={id} className={state}>
			<Task {...elem}
			changeOfState={() => changeOfState(id)}
			onDeleted={() => onDeleted(id)}/>
			</li>
		)
	})
	return (
		<ul className="todo-list">
			{elements}
		</ul>
	)
}

export default TaskList;