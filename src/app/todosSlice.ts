import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TodoRecord } from "../model/todo-record.interface"
import { RootState } from "./store"

interface TodosState {
  value: TodoRecord[]
}

const initialState: TodosState = {
  value: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value.push({ content: action.payload, isCompleted: false })
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    },
    setCompleted: (state, action: PayloadAction<[number, boolean]>) => {
      state.value[action.payload[0]].isCompleted = action.payload[1]
    }
  }
})

export const { add, remove, setCompleted } = todosSlice.actions
export const selectTodos = (state: RootState): TodoRecord[] => state.todos.value
export default todosSlice.reducer
