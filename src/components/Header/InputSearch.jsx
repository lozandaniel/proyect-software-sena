import { SearchIcon } from '../../icons/Icons'

/* Componente del campo de busqueda */
function InputSearch() {
  return (
    <div className="hidden h-9 w-80 items-center gap-2 rounded-md bg-neutral-100 ps-2 lg:flex">
      <SearchIcon />
      <input
        className="items flex h-9 w-full items-center rounded-md border-transparent bg-neutral-100 outline-none"
        placeholder="Buscar"
        type="search"
      />
    </div>
  )
}

export default InputSearch
