import { useState } from 'react'
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
type Props = {
  setSearchFilter: (filter:string) => void
}
const Search = (props:Props) => {
  const { setSearchFilter } = props
  const[searchQuery, setSearchQuery] = useState('')

  function handleSearchChange(e) {
    setSearchQuery(e.target.value)
  }

  function handleSearchClick() {
    setSearchFilter(searchQuery)
    setSearchQuery('')
  }

  return (
    <div className="flex flex-1 items-center justify-end md:justify-between h-full">
      <div className="relative pl-12 h-full">
        <label htmlFor="Search" className="sr-only"> Search </label>
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          type="text"
          id="Search"
          placeholder="SEARCH NEWSBITS"
          className="w-400 font-montserrat transition-all w-full h-full min-w-fit border-x border-x-gray-300 dark:border-x-stone-500 pl-4 pr-12 text-lg text-gray-700 dark:text-stone-400 placeholder:text-gray-400 dark:placeholder:text-stone-400  bg-transparent"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-400 hover:text-gray-700" onClick={handleSearchClick}>
            <span className="sr-only">Search</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5"/>
          </button>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          <div className="relative flex-shrink-0">
            <span className="absolute bottom-0 right-0 w-4 h-4 border rounded-full bg-lime-500 border-gray-200 dark:bg-lime-500 dark:border-gray-900"></span>
            <img src="/assets/logo-xl.png" alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search