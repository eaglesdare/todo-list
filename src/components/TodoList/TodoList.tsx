import { FunctionComponent, useState } from "react"
import TodoListContainer from "./internal/TodoListContainer"
import TodoListFilterSelector, { TodoListFilterValue } from "./internal/TodoListFilterSelector"
import TodoListInput from "./internal/TodoListInput"
import { TodoRecord } from "../../model/todo-record.interface"
import { AppDispatch } from "../../app/store"

interface TodoListProps {
  todos: TodoRecord[]
  dispatch: AppDispatch
}

const TodoList: FunctionComponent<TodoListProps> = ({ todos, dispatch }) => {
  const [currentFilter, setCurrentFilter] = useState<TodoListFilterValue>("all")
  return (
    <div>
      <TodoListFilterSelector value={currentFilter} onChange={setCurrentFilter} todos={todos} />
      <TodoListInput dispatch={dispatch} />
      <TodoListContainer filter={currentFilter} todos={todos} dispatch={dispatch} />
    </div>
  )
}

export default TodoList
