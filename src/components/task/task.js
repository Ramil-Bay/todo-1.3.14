import React from 'react';

import './task.css'

const Task = ({label, changeOfState, onDeleted}) => {
	return (
		<div className="view">
			<input className="toggle" type="checkbox" 
			onClick={ changeOfState }/>
			<label>
				<span 
				className="description"
				
				>{label}</span>
			</label>
			<button className="icon icon-edit"></button>
            <button 
            className="icon icon-destroy"
            onClick={ onDeleted }
            ></button>
		</div>
	)
}

export default Task;