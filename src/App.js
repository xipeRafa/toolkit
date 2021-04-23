
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
			<h1>
        Introduccion a Unit Testing
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum consequatur, debitis ratione cupiditate omnis asperiores tenetur nam facilis nemo iste possimus doloribus tempora placeat natus hic veniam, magnam voluptates sunt!
      </p>
      <h2>Otro marcado</h2>
		</div>
	);
};

export default App;
