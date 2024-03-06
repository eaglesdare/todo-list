import { FunctionComponent } from "react"
import { ButtonGroup, Button, Badge } from "react-bootstrap"
import { useAppSelector } from "../../../app/hooks"
import { selectTodos } from "../../../app/todosSlice"
import { filters } from "./filters"

interface TodoListFilterSelectorProps {
  value: TodoListFilterValue
  onChange: (value: TodoListFilterValue) => void
}
const TodoListFilterSelector: FunctionComponent<TodoListFilterSelectorProps> = ({ value, onChange }) => {
  const todos = useAppSelector(selectTodos)
  return (
    <ButtonGroup className="d-block">
      {Object.entries(filters).map(([filterKey, { label, predicate }]) =>
        <Button
          key={filterKey}
          active={filterKey === value}
          variant="light"
          onClick={() => onChange(filterKey as keyof typeof filters)}
        >
          {label} <Badge bg="secondary">{todos.filter(predicate).length}</Badge>
        </Button>
      )}
    </ButtonGroup>
  )
}

export type TodoListFilterValue = "all" | "active" | "completed"

export default TodoListFilterSelector
