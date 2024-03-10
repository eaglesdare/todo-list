import { FunctionComponent } from "react"
import { ButtonGroup, Button, Badge } from "react-bootstrap"
import { filters } from "./filters"
import { TodoRecord } from "../../../model/todo-record.interface"

interface TodoListFilterSelectorProps {
  value: TodoListFilterValue
  onChange: (value: TodoListFilterValue) => void
  todos: TodoRecord[]
}
const TodoListFilterSelector: FunctionComponent<TodoListFilterSelectorProps> = ({ value, onChange, todos }) => {
  return (
    <ButtonGroup className="d-block">
      {Object.entries(filters).map(([filterKey, { label, predicate }]) =>
        <Button
          key={filterKey}
          active={filterKey === value}
          variant="light"
          onClick={() => onChange(filterKey as TodoListFilterValue)}
        >
          {label} <Badge bg="secondary">{todos.filter(predicate).length}</Badge>
        </Button>
      )}
    </ButtonGroup>
  )
}

export type TodoListFilterValue = "all" | "active" | "completed"

export default TodoListFilterSelector
