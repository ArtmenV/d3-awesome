import {
  combineReducers
} from '@reduxjs/toolkit'
import counterSlice from './counter/counter'
import todoSlice from './todo-list'

export const rootReducer = combineReducers({
  counterSlice,
  todoSlice
})