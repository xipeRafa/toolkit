import React from 'react';
import {useSelector} from 'react-redux'

const CompleteItems = () => {

      const completedd = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	)

	return <h4>Total Complete Items: {completedd.length}</h4>;
};

export default CompleteItems;
