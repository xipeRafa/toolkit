import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import {useSelector, useDispatch} from 'react-redux' // use Selector To get values from the store in a component, use a "selector" useSelector
import { getTodosAsync } from '../redux/todoSlice'
import Filter from './Filter'


const TodoList = () => {
	const dispatch = useDispatch();
	let todos = useSelector((state) => state.todos)//all state
      
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch])

 
/*    let todos = useSelector((state) => state.todos.filter(t => t.completed))  */
   

	return (
		<div>
			<Filter />
			
			{todos.map((todo) => (
	<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</div>
	);
};

export default TodoList;
