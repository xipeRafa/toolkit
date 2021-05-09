import React from 'react'
import {useDispatch} from 'react-redux'
import {filterCompleted, filterActive,getTodosAsync} from '../redux/todoSlice'

const Filter = () => {
      const dispatch = useDispatch()

      const getAll= () => {dispatch(getTodosAsync())} 

      const handleCompleted = () => {dispatch(filterCompleted())}

      const handleActive = () => {dispatch(filterActive())}
                  
      return (
            <div>
                  <button onClick={getAll} >ALL</button>
                  <button onMouseDown={getAll} onMouseUp={handleCompleted} >Completed</button>
                  <button onMouseDown={getAll} onMouseUp={handleActive} >Active</button>
            </div>
      )
}

export default Filter;
