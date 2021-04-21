import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getTodosAsync = createAsyncThunk(  //function that retuirn another function
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch('http://localhost:7000/todos');
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
);

const todoSlice = createSlice({
      name: 'todos',
      initialState: [],
      reducers: {
            addTodo: (state, action) => { //action contains payload and type
                  const newTodo = {
                        id:Date.now(),
                        title: action.payload.title,
                        completed: false
                  }
                  state.push(newTodo)
            },
            completedItem: (state, action) => {
             const index = state.findIndex((todo)=> todo.id === action.payload.id); //find the index
             state[index].completed = action.payload.completed
            },
            deleteTodo: (state, action) => {
                  return state.filter((todo) => todo.id !== action.payload.id)
            }
            
      },
      extraReducers:{
            [getTodosAsync.pending]: (state, action) => {
                  console.log('pending...');
            },
            [getTodosAsync.fulfilled]: (state, action) => {
                  console.log('fetched succesfuly!');
			return action.payload.todos;
            },
            
      }
})

export const {addTodo, completedItem, deleteTodo} = todoSlice.actions

export default todoSlice.reducer