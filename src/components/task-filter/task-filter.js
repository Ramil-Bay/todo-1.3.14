import React from 'react';

import './task-filter.css';

const TaskFilter = ({filterAll, filterCompleted, filterActive}) => {
	return (
		<ul className="filters">
            <li>
              <button className="selected"
              onClick={filterAll}>All</button>
            </li>
            <li>
              <button onClick={filterActive}>Active</button>
            </li>
            <li>
              <button onClick={filterCompleted}>Completed</button>
            </li>
        </ul>
	)
}

export default TaskFilter;