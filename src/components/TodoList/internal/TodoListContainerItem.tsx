import { FunctionComponent, useId } from "react"
import { TodoRecord } from "../../../model/todo-record.interface"
import { ListGroup, Row, Col, Form, Button } from "react-bootstrap"

interface TodoListContainerItemProps {
  todo: TodoRecord
  onChange: (value: boolean) => void
  onDelete: () => void
}
const TodoListContainerItem: FunctionComponent<TodoListContainerItemProps> = ({ todo, onChange, onDelete }) => {
  const selfId = useId()
  return (
    <ListGroup.Item className="hover-parent">
      <Row>
        <Col xs="10" md="11" className="text-break">
          <Form.Check
            type="checkbox"
            id={`todo-record-${selfId}`}
            label={todo.content}
            checked={todo.isCompleted}
            onChange={(event) => onChange(event.target.checked)}
          />
        </Col>
        <Col xs="2" md="1" className="text-end">
          <Button
            variant="light"
            className="btn-close hover-child"
            onClick={onDelete}
          />
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default TodoListContainerItem
