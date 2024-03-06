import { FunctionComponent } from "react"
import TodoList from "./components/TodoList/TodoList"
import { Col, Container, Row } from "react-bootstrap"

const App: FunctionComponent = () => {
  const records = [
    { content: "Hello, world!", isCompleted: false },
    { content: "Goodbye, world!", isCompleted: true },
    { content: "Hello, PR Volt!", isCompleted: false },
  ]
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <h1>Todo List Demo</h1>
          <TodoList records={records} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
