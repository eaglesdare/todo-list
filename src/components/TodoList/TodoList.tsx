import { FunctionComponent, useState } from "react"
import TodoListContainer from "./internal/TodoListContainer"
import TodoListFilterSelector, { TodoListFilterValue } from "./internal/TodoListFilterSelector"
import TodoListInput from "./internal/TodoListInput"

const TodoList: FunctionComponent = () => {
  const [currentFilter, setCurrentFilter] = useState<TodoListFilterValue>("all")
  return (
    <div>
      <TodoListFilterSelector value={currentFilter} onChange={setCurrentFilter} />
      <TodoListInput />
      <TodoListContainer filter={currentFilter} />
    </div>
  )
}

export default TodoList
