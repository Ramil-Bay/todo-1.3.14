import React from 'react';

import TaskFilter from '../task-filter';

import './footer.css';

const Footer = ({ todos, filterAll, filterActive, filterCompleted, clearCompleted }) => {
	let itemsLeft = 0;

	todos.forEach(elem => {
		if (elem.state === 'active') itemsLeft++;
	})

	return (
		<footer className="footer">
			<span className="todo-count">{itemsLeft} items left</span>
			<TaskFilter 
			filterAll={() => filterAll()}
			filterActive={() => filterActive()}
			filterCompleted={() => filterCompleted()} />
			<button className="clear-completed"
			onClick={clearCompleted}>Clear completed</button>
		</footer>
	)
};

export default Footer;