import { useEffect, useState } from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEllipsis } from "@fortawesome/free-solid-svg-icons"

type Props = {
  onSetCategoryFilter: (filter:string) => void
}
const Filters = (props:Props) => {
  const { onSetCategoryFilter } = props
  const filters:string[] = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']

  const [activeFilter, setActiveFilter] = useState(filters[0])
  const [open, setOpen] = useState(false)

  function onFilterClick(index:number) {
    setActiveFilter(filters[index])
    onSetCategoryFilter(filters[index])
  }

  useEffect(() => {
    function setFilter () {
      setActiveFilter(filters[0])
      onSetCategoryFilter(filters[0])
    }
    setFilter()
  }, [])

console.log(open)
  return (
    <nav className={`group ${open ? 'open' : ''}`}>
      <span className="flex items-center pb-5">
        <span className="h-px flex-1 bg-stone-400 mb-2"></span>
      </span>
      <ul className="transition-max-height duration-300 text-left px-4 overflow-hidden max-h-[200px] group-[.open]:max-h-screen overscroll-auto">
        {/* <li className={`group flex cursor-pointer ${noFiltersSet ? 'is-active' : ''}`}>
          <span onClick={onResetFilterClick} className="transition-all inline-flex uppercase rounded-full bg-transparent px-4 py-1 mb-2 text-stone-500 dark:text-stone-400 font-semibold group-[.is-active]:text-stone-700 group-[.is-active]:dark:text-stone-300 ring-1 ring-inset ring-stone-400 group-[.is-active]:ring-stone-600 group-[.is-active]:dark:ring-stone-300">
            All Tags
          </span>
          {noFiltersSet && (
            <span className="flex-grow text-right">
              <FontAwesomeIcon icon={faCheck} className='text-lime-400'/>
            </span>
          )}
        </li> */}
        {filters.map((filter, index) => {
          const isActive = activeFilter.includes(filter)
          return (
            <li key={index} className={`group flex cursor-pointer ${isActive ? 'is-active' : ''}`}>
              <span onClick={() => onFilterClick(index)} className="transition-all inline-flex capitalize rounded-full bg-transparent px-4 py-1 mb-2 text-stone-500 dark:text-stone-400 font-semibold group-[.is-active]:text-stone-700 group-[.is-active]:dark:text-stone-300 ring-1 ring-inset ring-stone-400 group-[.is-active]:ring-stone-600 group-[.is-active]:dark:ring-stone-300">
                {filter}
              </span>
              {isActive && (
                <span className="flex-grow text-right">
                  <FontAwesomeIcon icon={faCheck} className='text-lime-400'/>
                </span>
              )}
            </li>
          )
        })}
      </ul>
        <div className='px-4'>
          <button onClick={() => setOpen(!open)} className='block text-left cursor-pointer uppercase rounded-full bg-transparent px-6 py-1 text-stone-500 dark:text-stone-400 font-semibold ring-1 ring-inset ring-stone-400'>
            <FontAwesomeIcon icon={faEllipsis} className='text-stone-600 dark:text-stone-300'/>
          </button>
        </div>
    </nav>
  )
}

export default Filters