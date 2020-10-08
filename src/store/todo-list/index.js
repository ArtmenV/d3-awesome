import {
  createSlice
} from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todoLists: ['Toolkit Cool', 'jimbo-star']
  },
  reducers: {
    addTodo(state, action) {
      state.todoLists.push(action.payload)
    },
    removeLastTodo({ todoLists }, { payload }) {
      todoLists.splice(todoLists.findIndex(item => item === payload), 1)
    }
  }
})

export default todoSlice.reducer
export const {
  addTodo,
  removeLastTodo
} = todoSlice.actions