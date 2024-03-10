import { ListGroup } from "react-bootstrap"
import { TodoRecord } from "../../../model/todo-record.interface"
import { filters } from "./filters"
import { TodoListFilterValue } from "./TodoListFilterSelector"
import { FunctionComponent } from "react"
import { setCompleted, remove } from "../../../app/todosSlice"
import { AppDispatch } from "../../../app/store"
import TodoListContainerItem from "./TodoListContainerItem"

interface TodoListContainerProps {
  filter: TodoListFilterValue
  todos: TodoRecord[]
  dispatch: AppDispatch
}

const TodoListContainer: FunctionComponent<TodoListContainerProps> = ({ filter, todos, dispatch }) => {
  const handleRecordChange = (index: number) => (value: boolean): void => {
    dispatch(setCompleted([index, value]))
  }
  const handleRecordDelete = (index: number) => (): void => {
    dispatch(remove(index))
  }
  return (
    <ListGroup className="mt-3">
      {todos.map((record, index) => [record, index] as [TodoRecord, number]).filter(([record]) => filters[filter].predicate(record)).map(([record, index]) =>
        <TodoListContainerItem key={index} todo={record} onChange={handleRecordChange(index)} onDelete={handleRecordDelete(index)} />
      )}
    </ListGroup>
  )
}

export default TodoListContainer

