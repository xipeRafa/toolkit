import React from 'react';
import {useDispatch} from 'react-redux'
import { completedItem, deleteTodo } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
      const dispatch = useDispatch()

	const handleCompleted = () => {
		dispatch(completedItem({
			id: id,
			completed: !completed
		}))
	}
	const handleDeleted = () => {
		dispatch(deleteTodo({
			id: id,
		}))
	}

	return (
			<div>
				<span>
					<input type='checkbox'
						
						 onChange={handleCompleted}
				      ></input>
					{title}
				</span>
				<button
					onClick={handleDeleted}    
				>
					Delete
				</button>
			</div>
	);
};

export default TodoItem;
