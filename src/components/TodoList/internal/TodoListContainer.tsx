import { ListGroup, Row, Col, Form, Button } from "react-bootstrap"
import { TodoRecord } from "../../../model/todo-record.interface"
import { filters } from "./filters"
import { TodoListFilterValue } from "./TodoListFilterSelector"
import { FunctionComponent } from "react"
import { setCompleted, remove } from "../../../app/todosSlice"
import { AppDispatch } from "../../../app/store"

interface TodoListContainerProps {
  filter: TodoListFilterValue
  todos: TodoRecord[]
  dispatch: AppDispatch
}

const TodoListContainer: FunctionComponent<TodoListContainerProps> = ({ filter, todos, dispatch }) => {
  const handleRecordChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCompleted([index, event.target.checked]))
  }
  const handleRecordDelete = (index: number) => (): void => {
    dispatch(remove(index))
  }
  return (
    <ListGroup className="mt-3">
      {todos.map((record, index) => [record, index] as [TodoRecord, number]).filter(([record]) => filters[filter].predicate(record)).map(([record, index]) =>
        <ListGroup.Item key={index} className="hover-parent">
          <Row>
            <Col xs="10" md="11" className="text-break">
              <Form.Check
                type="checkbox"
                id={`todo-record-${index}`}
                label={record.content}
                checked={record.isCompleted}
                onChange={handleRecordChange(index)}
              />
            </Col>
            <Col xs="2" md="1" className="text-end">
              <Button
                variant="light"
                className="btn-close hover-child"
                onClick={handleRecordDelete(index)}
              />
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default TodoListContainer

