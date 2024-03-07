import { useState } from "react"
import Articles from "../components/articles"
import Filters from "../components/filters"
import ActiveLayout from "../components/active_layout"
import { layouts } from "../components/active_layout/layouts"
import DarkMode from "../components/dark_mode"
import Header from "../components/header"
// import LanguageFilter from "../components/language_filter"

export const Main = () => {
  const [activeLayout, setActiveLayout] = useState(layouts.threeColumnLayout)

  function changeArticleLayout(layout:string) {
    setActiveLayout(layout)
  }

  const [activeCategory, setActiveCategory] = useState('none')

  function setActiveCategoryFilter(category: string) {
    if (category) {
      setSearchFilter('')
      setActiveCategory(category)
    } else {
      setActiveCategory('general')
    }
  }

  const [searchQuery, setSearchQuery] = useState('')
  function setSearchFilter(query:string) {
    setSearchQuery(query)
  }

  return (
    <div className="transition-all bg-gray-100 dark:bg-stone-900">
      <Header setSearchFilter={setSearchFilter} />
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8">
          {/* Main content */}
          <main className="container mx-auto p-4 lg:col-span-4">
            {/* only for testing  */}
            {/* { (activeCategory || searchQuery) && (
              <div className="transition-all bg-gray-100/[.9] dark:bg-stone-900/[.9] sticky top-[108px] z-10 p-4 text-left text-gray-900 dark:text-stone-300 -my-3 backdrop-blur-sm">
                <h3>Results for: {activeCategory} {searchQuery} </h3>
            </div>
            )} */}
            <div className={activeLayout}>
              <Articles searchQuery={searchQuery} activeCategory={activeCategory} />
            </div>
          </main>
          {/* Sidebar */}
          <aside className="transition-all bg-white/[.9] dark:bg-stone-800/[.9] backdrop-blur-sm text-gray rounded-tr-none rounded-br border-1 p-4 h-screen sticky shadow-lg top-[108px]" >
            {/* <LanguageFilter /> */}
            <Filters onSetCategoryFilter={setActiveCategoryFilter} />
            <ActiveLayout onChangeArticleLayout={changeArticleLayout} />
            <DarkMode />
          </aside>
        </div>
      </div>
    </div>
  )
}