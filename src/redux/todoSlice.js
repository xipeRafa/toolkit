import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getTodosAsync = createAsyncThunk(  //function that return another function
	'todos/getTodosAsync',
	async () => {
		const resp = await fetch(`http://localhost:7000/todos`);
		if (resp.ok) {
			const todos = await resp.json();
			return { todos };
		}
	}
);
	
export const addTodoAsync = createAsyncThunk(
	'todos/addTodoAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: payload.title }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const completedAsync = createAsyncThunk(
	'todos/completeTodoAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);

export const deleteTodoAsync = createAsyncThunk(
	'todos/deleteTodoAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
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
            },
		filterCompleted: (state, action) => {

                  return state.filter(todo => todo.completed) 
            },
		filterActive: (state, action) => {

			return state.filter(todo => !todo.completed)
			
            },

		
      },
      extraReducers:{
            [getTodosAsync.pending]: (state, action) => {
                  console.log('pending...');
            },
            [getTodosAsync.fulfilled]: (state, action) => {
                  console.log('fetched succesfuly!');
			return action.payload.todos;
            },
            [addTodoAsync.fulfilled]: (state, action) => {
			state.push(action.payload.todo);
		},
            [completedAsync.fulfilled]: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.todo.id);
			state[index].completed = action.payload.todo.completed;
		},
            [deleteTodoAsync.fulfilled]: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		
            
      }
})

export const {addTodo, completedItem, deleteTodo,
	        filterAll,filterCompleted,filterActive} = todoSlice.actions

export default todoSlice.reducer