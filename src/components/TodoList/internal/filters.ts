import { TodoRecord } from "../../../model/todo-record.interface"
import { TodoListFilterValue } from "./TodoListFilterSelector"

interface FilterDef {
  label: string
  predicate: (record: TodoRecord) => boolean
}

export const filters: Record<TodoListFilterValue, FilterDef> = {
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
