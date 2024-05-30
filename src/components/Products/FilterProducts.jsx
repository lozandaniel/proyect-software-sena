function FilterProducts({ onChange }) {
  /* Filtro de busqueda cuando cambia la categoria */
  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }

  return (
    <aside className="flex flex-col w-full lg:w-3/12 p-4">
      <h3 className="text-2xl font-bold mb-5">Filtrar por:</h3>
      <div className="max-w-md">
        <label htmlFor="category" className="block text-sm">
          Categorias
        </label>
        <select
          name="category"
          id="category"
          onChange={handleChangeCategory}
          className="bg-neutral-100 border border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          defaultValue={'all'}
        >
          <option value="all" selected>
            Todos
          </option>
          <option value="Quesos">Quesos</option>
          <option value="Lácteos">Lacteos</option>
          <option value="Reposteria">Reposteria</option>
          <option value="Gourmet">Gourmet</option>
          <option value="Aceites">Aceites</option>
          <option value="Harinas">Harinas</option>
          <option value="Harinas">Mantequillas</option>
          <option value="Levaduras">Levaduras</option>
        </select>
      </div>
    </aside>
  )
}

export default FilterProducts
