const DarkMode = () => {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="flex justify-center align-center pt-8">
      <div className="px-2 py-1 text-custom-gray uppercase text-sm">Light</div>
      <div className="flex">
        <label
        htmlFor="DarkModeToggle"
        className="transition-all relative h-6 w-10 cursor-pointer rounded-full bg-gray-300 dark:bg-stone-600 transition [-webkit-tap-highlight-color:_transparent]"
      >
        <input type="checkbox" id="DarkModeToggle" className="peer sr-only" onClick={toggleDarkMode}/>

        <span
          className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-white transition-all peer-checked:start-4"
        ></span>
      </label>
      </div>
      <div className="px-2 py-1 text-custom-gray uppercase text-sm">Dark</div>
    </div>
  )
}

export default DarkMode