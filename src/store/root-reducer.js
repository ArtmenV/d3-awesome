import {
  combineReducers
} from '@reduxjs/toolkit'
import counterSlice from './counter/counter'

export const rootReducer = combineReducers({
	counterSlice
})