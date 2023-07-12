import { Todos } from './components/Todos'
import { Options } from './components/Options'
import { Header } from './components/Header'
import { useTodo } from './hooks/useTodo'

const App = (): JSX.Element => {
  const {
    filterSelected,
    handleRemove,
    handleCompleted,
    handleFilterChange,
    handleRemoveAllCompleted,
    completedCount,
    filteredTodos,
    handleAddTodo,
    filters
  } = useTodo()

  return (
    <div className="flex-auto todoapp min-h-screen bg-dark-400 w-full ">
      <div className="text-white max-w-[500px] mx-auto py-5 px-3 flex flex-col gap-3">
        <Header onAddTodo={handleAddTodo} />
        <Options
          completedCount={completedCount}
          filterSelected={filterSelected}
          filters={filters}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handleFilterChange}
        />
        <Todos
          onToggleCompleteTodo={handleCompleted}
          onRemoveTodo={handleRemove}
          todos={filteredTodos}
        />

      </div>
    </div>
  )
}

export default App
