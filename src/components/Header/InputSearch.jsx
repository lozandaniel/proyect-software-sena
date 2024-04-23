import { SearchIcon } from '../../icons/Icons'

function InputSearch() {
  return (
    <div className="bg-neutral-100 h-9 w-80 items-center gap-2 ps-2 rounded-md hidden lg:flex">
      <SearchIcon />
      <input
        type="search"
        placeholder="Buscar"
        className="bg-neutral-100 h-9 w-full items border-transparent rounded-md outline-none flex items-center"
      />
    </div>
  )
}

export default InputSearch
