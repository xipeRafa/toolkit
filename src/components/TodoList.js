import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import {useSelector, useDispatch} from 'react-redux' // use Selector To get values from the store in a component, use a "selector" useSelector
import { getTodosAsync } from '../redux/todoSlice'


const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos)//all state
      
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch])

	return (
		<div>
			{todos.map((todo) => (
	<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</div>
	);
};

export default TodoList;
