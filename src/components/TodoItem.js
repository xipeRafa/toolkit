import React from 'react';
import {useDispatch} from 'react-redux'
import completedItem from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
      const dispatch = useDispatch()

	const handleCompleted = () => {
		dispatch(completedItem({
			id: id,
			completed: !completed
		}))
	}

	return (
			<div>
				<span>
					<input type='checkbox'
						
						 onChange={()=>handleCompleted}
				      ></input>
					{title}
				</span>
				<button>Delete</button>
			</div>
	);
};

export default TodoItem;
