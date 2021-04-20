import React from 'react';

const TodoItem = ({ id, title, completed }) => {
	return (
			<div>
				<span>
					<input type='checkbox' checked={completed}></input>
					{title}
				</span>
				<button>Delete</button>
			</div>
	);
};

export default TodoItem;
