import { FunctionComponent } from "react"
import TodoList from "./components/TodoList/TodoList"
import { Col, Container, Row } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { selectTodos } from "./app/todosSlice"

const App: FunctionComponent = () => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <h1>Todo List Demo</h1>
          <TodoList todos={todos} dispatch={dispatch} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
