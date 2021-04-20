import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux' // To get values from the store in a component, use a "selector" useSelector


const TodoList = () => {
	const todos = useSelector((state) => state.todos)


	return (
		<div>
			{todos.map((todo) => (
	<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</div>
	);
};

export default TodoList;
