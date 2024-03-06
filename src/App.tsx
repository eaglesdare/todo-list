import { FunctionComponent } from "react"
import TodoList from "./components/TodoList/TodoList"
import { Col, Container, Row } from "react-bootstrap"

const App: FunctionComponent = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <h1>Todo List Demo</h1>
          <TodoList />
        </Col>
      </Row>
    </Container>
  )
}

export default App
