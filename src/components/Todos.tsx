import { type Todo as TodoType, type TodoId, type listOfTodos } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: listOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className="todo-list flex flex-col gap-2">
        {todos.map(todo => (
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggleCompleteTodo={onToggleCompleteTodo}
                    onRemoveTodo={onRemoveTodo}
                />
            </li>
        ))}
    </ul>
  )
}
