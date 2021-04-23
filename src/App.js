
import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CompleteItems from './components/CompleteItems';

const App = () => {
	return (
		<div> 
			<AddTodoForm />
			<TodoList />
			<CompleteItems />
		</div>
	);
};

export default App;
