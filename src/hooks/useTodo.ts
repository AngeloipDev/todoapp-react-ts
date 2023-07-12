import { useState } from 'react'
import {
  type Todo as TodoType,
  type TodoId,
  type TodoTitle,
  type FilterValue,
  type listOfTodos
} from '../types'
import { TODO_FILTERS, FILTERS_BUTTONS } from '../consts'

interface Props {
  filterSelected: FilterValue
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemoveAllCompleted: () => void
  pendingCount: number
  completedCount: number
  filteredTodos: listOfTodos
  handleAddTodo: ({ title }: TodoTitle) => void
  filters: typeof FILTERS_BUTTONS
}

export const useTodo = (): Props => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const todosDataString = localStorage.getItem('todos')
    if (todosDataString !== null) return JSON.parse(todosDataString)
    return []
  })
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const pendingCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - pendingCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.PENDING) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const counts = {
    all: completedCount + pendingCount,
    pending: pendingCount,
    completed: completedCount
  }

  const updatedFilters = { ...FILTERS_BUTTONS }

  const filters = Object.fromEntries(
    Object.keys(updatedFilters).map((key, index) => [
      key,
      {
        ...updatedFilters[key],
        count: Object.values(counts)[index]
      }
    ])
  )

  return {
    filterSelected,
    handleRemove,
    handleCompleted,
    handleFilterChange,
    handleRemoveAllCompleted,
    pendingCount,
    completedCount,
    filteredTodos,
    handleAddTodo,
    filters
  }
}
