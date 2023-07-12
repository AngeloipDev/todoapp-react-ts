import { type FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filters: typeof FILTERS_BUTTONS
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  filters,
  onFilterChange
}) => {
  return (
    <ul className="flex justify-between gap-2 flex-wrap">
      {Object.entries(filters).map(([key, { literal, count }]) => {
        const isSelected = key === filterSelected
        const aClassName = isSelected ? 'bg-dark-300' : 'bg-blue-400 text-gray-100'
        const spanClassName = isSelected ? 'bg-dark-100' : 'bg-blue-500'
        return (
          <li className='flex-auto' key={key}>
            <div
              className={`${aClassName} cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-full font-medium`}
              onClick={(e) => {
                e.preventDefault()
                onFilterChange(key)
              }}
            >
              <p> {literal}</p>
              <span className={`${spanClassName} flex items-center justify-center h-6 w-6 rounded-full`}>
                {count}
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
