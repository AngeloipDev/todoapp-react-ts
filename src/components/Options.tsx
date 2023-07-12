import { type FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
  filters: typeof FILTERS_BUTTONS
}

export const Options: React.FC<Props> = ({
  completedCount,
  filterSelected,
  filters,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Filters
        filterSelected={filterSelected}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button
          className="bg-dark-300 px-3 py-2 rounded-full font-medium"
          onClick={onClearCompleted}
        >
          Borrar completadas
        </button>
      )}
    </div>
  )
}
