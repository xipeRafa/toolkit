import React, { useState } from 'react';
import{useDispatch} from 'react-redux'
//import {addTodo} from '../redux/todoSlice' //action
//To call the action, you "dispatch" it to the store Use the "useDispatch" hook to get access to the "dispatch" function
import { addTodoAsync } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

      const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);

	    if (value) {dispatch(addTodoAsync({title: value,}));}
	    setValue('')
	};

	return (
		<div>
		<h2 data-testid="titulo">Hola jest!!</h2>
		
		<form onSubmit={onSubmit} >
			<input
				type='text'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' 
			        data-testid="btn-submit"
		      >
				Submit
			</button>
		</form>
		</div>
	);
};

export default AddTodoForm;
