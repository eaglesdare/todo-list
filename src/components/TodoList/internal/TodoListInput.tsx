import { Form } from "react-bootstrap"
import { maxContentLength } from "../../../model/todo-record.interface"
import { FunctionComponent, useState } from "react"
import { add } from "../../../app/todosSlice"
import { AppDispatch } from "../../../app/store"

interface TodoListInputProps {
  dispatch: AppDispatch
}

const TodoListInput: FunctionComponent<TodoListInputProps> = ({ dispatch }) => {
  const [newRecordContent, setNewRecordContent] = useState("")
  const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key !== "Enter" || newRecordContent.length === 0 || newRecordContent.length > maxContentLength) return
    dispatch(add(newRecordContent))
    setNewRecordContent("")
  }
  return (
    <>
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
    </>
  )
}

export default TodoListInput
