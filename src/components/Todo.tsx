import { Check, Circle, Trash } from '../consts'
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo
}) => {
  return (
    <div className="bg-dark-300 py-2 px-3 rounded-md flex justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="toggle"
          id={id}
          checked={completed}
          onChange={(e) => {
            onToggleCompleteTodo({ id, completed: e.target.checked })
          }}
          hidden
        />
        <label htmlFor={id} className="text-xl text-blue-400 cursor-pointer">
          {completed ? <Check /> : <Circle />}
        </label>
        <p className={completed ? 'line-through' : ''}>{title}</p>
      </div>
      <button
        onClick={() => {
          onRemoveTodo({ id })
        }}
      >
        <Trash />
      </button>
    </div>
  )
}
