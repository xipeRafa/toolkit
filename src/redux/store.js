import {configureStore} from '@reduxjs/toolkit' 
import todoSlice from './todoSlice'

export default configureStore({
      reducer:{
         todos:todoSlice
         //name of the slice and name of slice document
      },
})