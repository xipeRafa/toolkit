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
			<div className='item'>
				<div>
					<input type='checkbox'
						 onChange={handleCompleted}
				       />
			      </div>
					
				<div>{title}</div>	
					
				
				<div> ID:{id}</div>
				<button
					onClick={handleDeleted}    
				>
					Delete
				</button>
			</div>
	);
};

export default TodoItem;
