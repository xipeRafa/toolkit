import React from 'react';
import {useSelector} from 'react-redux'

const CompleteItems = () => {

      const completed = useSelector((state) =>
		state.todos.filter((todo) => todo.completed ))

	const Uncompleted = useSelector((state) =>
		state.todos.filter((todo) => !todo.completed ))
		
	const total = useSelector((state) => state.todos)		

	return <h4 data-testid="completed">
		       Total Complete Items: {completed.length}
			 <br/>
			 Total Uncomplete Items: {Uncompleted.length}
			 <br/>
			 Total Items: {total.length}
		</h4>
};

export default CompleteItems;
