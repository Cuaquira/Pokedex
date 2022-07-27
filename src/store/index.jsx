import { configureStore } from '@reduxjs/toolkit'
import  inputSlice  from './slices/input.slice'

export default configureStore({
    reducer: {
        username: inputSlice,
    }
})
