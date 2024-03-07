import { useState } from 'react'

const LanguageFilter = () => {
  const options:string[] = ['en', 'ar', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh']

  const [language_filter, setLanguageFilter] = useState(options[0])

  const handleChange = () => {
    const select = document.getElementById('LanguageFilter') as HTMLSelectElement
    const value = select.value
    setLanguageFilter(value)
  }

  console.log({language_filter})

  return (
    <div className="relative">
      Selected Language: {language_filter}
      <select
        name="LanguageFilter"
        id="LanguageFilter"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        onChange={()=>handleChange()}
      >
        <option value="">Please select</option>
        {
          options.map((option, index:number) => (
            <option key={index} value={option} onSelect={()=>setLanguageFilter(option)}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}

export default LanguageFilter
