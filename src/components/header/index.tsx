
import Search from '../search'

type Props = {
  setSearchFilter: (filter:string) => void
}
const Header = (props:Props) => {
  const { setSearchFilter } = props
  return (
    <header className="transition-all bg-white/[.9] dark:bg-stone-800/[.9] backdrop-blur-sm sticky top-0 z-10">
      <div className="bg-lime-300 px-4 py-3 text-white ">
        <p className="text-center text-sm font-medium">
          Love NEWSBits? <a href="#" className="inline-block underline">Support this feed!</a>
        </p>
      </div>
      <div className="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-black-600" href="#">
          <span className="sr-only">Home</span>
          <div className="flex items-center">
            <img src="/assets/logo-xl.png" alt="logo" width='50' />
            <span className="transition-all font-pacifico font-extrabold pl-3 text-2xl dark:text-white">newsbits</span>
          </div>
        </a>

        <Search setSearchFilter={setSearchFilter} />
      </div>
    </header>
  )
}

export default Header