import React from 'react';
import {useDispatch} from 'react-redux'
import { completedAsync, deleteTodoAsync } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
      const dispatch = useDispatch()

	const handleCompleted = () => {
		dispatch(completedAsync({
			id: id,
			completed: !completed
		}))
	}

	const handleDeleted = () => {
		dispatch(deleteTodoAsync({
			id: id,
		}))
	}

	return (
			<div>
				<span>
					<input type='checkbox'
						defaultChecked={completed}
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
