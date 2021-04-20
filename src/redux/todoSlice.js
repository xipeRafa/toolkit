import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
      name: 'todos',
      initialState: [
            {id:1, title:'item1', completed:'false'},
            {id:2, title:'item2', completed:'true'},
      ],
      reducers: {
            addTodo: (state, action) => { //action contains payload and type
                  const newTodo = {
                        id:Date.now(),
                        title: action.payload.title,
                        completed: false
                  }
                  state.push(newTodo)
            }
      }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer