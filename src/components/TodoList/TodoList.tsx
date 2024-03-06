import { FunctionComponent, useState } from "react"
import { Badge, Button, ButtonGroup, Col, Form, ListGroup, Row } from "react-bootstrap"
import { TodoRecord, maxContentLength } from "../../model/todo-record.interface"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { add, remove, selectTodos, setCompleted } from "../../app/todosSlice"

const TodoList: FunctionComponent = () => {
  const filters = {
    all: {
      label: "All",
      predicate: () => true
    },
    active: {
      label: "Active",
      predicate: (record: TodoRecord) => !record.isCompleted
    },
    completed: {
      label: "Completed",
      predicate: (record: TodoRecord) => record.isCompleted
    }
  }
  const [newRecordContent, setNewRecordContent] = useState("")
  const [currentFilter, setCurrentFilter] = useState<keyof typeof filters>("all")
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()
  const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key !== "Enter" || newRecordContent.length === 0 || newRecordContent.length > maxContentLength) return
    dispatch(add(newRecordContent))
    setNewRecordContent("")
  }
  const handleRecordChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setCompleted([index, event.target.checked]))
  }
  const handleRecordDelete = (index: number) => (): void => {
    dispatch(remove(index))
  }
  return (
    <div>
      <ButtonGroup className="d-block">
        {Object.entries(filters).map(([filterKey, { label, predicate }]) =>
          <Button
            key={filterKey}
            active={filterKey === currentFilter}
            variant="light"
            onClick={() => setCurrentFilter(filterKey as keyof typeof filters)}
          >
            {label} <Badge bg="secondary">{todos.filter(predicate).length}</Badge>
          </Button>
        )}
      </ButtonGroup>
      <Form.Control 
        className="mt-3"
        type="text"
        placeholder="Type a new record here and press ENTER..."
        maxLength={maxContentLength}
        aria-describedby="new-record-help"
        value={newRecordContent}
        onChange={(event) => setNewRecordContent(event.target.value)}
        onKeyUp={handleInputKeyUp}
      />
      <Form.Text id="new-record-help" muted>
        {maxContentLength - newRecordContent.length} characters remaining
      </Form.Text>
      <ListGroup className="mt-3">
        {todos.map((record, index) => [record, index] as [TodoRecord, number]).filter(([record]) => filters[currentFilter].predicate(record)).map(([record, index]) =>
          <ListGroup.Item key={index} className="hover-parent">
            <Row>
              <Col>
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
    </div>
  )
}

export default TodoList
