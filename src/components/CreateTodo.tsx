import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState<null | string>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (inputValue.trim() === '') {
      setError('Introducir una actividad')
      return
    }

    if (inputValue.trim().length <= 3) {
      setError('Debe contener al menos 4 letras')
      return
    }

    saveTodo({ title: inputValue })
    setError(null)
    setInputValue('')
  }

  return (
    <div className='flex flex-col gap-2'>
      <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center bg-dark-200 rounded-lg"
    >
      <input
        className="flex-1 border-none outline-none bg-transparent p-3"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
      <button
        type="submit"
        className="border-none outline-none py-3 px-3 bg-dark-300 text-white cursor-pointer rounded-lg text-2xl"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
        </svg>
      </button>
    </form>
    {error !== null && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  )
}
