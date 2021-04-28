import React from 'react';
import {useSelector} from 'react-redux'

const CompleteItems = () => {

      const completed = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	)

	return <h4 data-testid="completed">
		       Total Complete Items: {completed.length}
		</h4>;
};

export default CompleteItems;
