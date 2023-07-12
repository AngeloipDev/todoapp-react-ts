import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="flex flex-col gap-3">
      <section className='flex items-center justify-center'>
        <h1 className='text-[32px] font-medium'>ToDo - List</h1>
      </section>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
