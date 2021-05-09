
import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CompleteItems from './components/CompleteItems';


const App = () => {
	return (
		<div> 
			
			<CompleteItems />
			<AddTodoForm />
			<TodoList />
			
			
	      </div>
	);
};

export default App;
