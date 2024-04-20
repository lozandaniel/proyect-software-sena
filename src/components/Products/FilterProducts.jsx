function FilterProducts({ onChange }) {
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
          className="bg-neutral-100 border border-[#E0E0E0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
        >
          <option value="all" selected>
            Todos
          </option>
          <option value="quesos">Quesos</option>
          <option value="lacteos">Lacteos</option>
          <option value="reposteria">Reposteria</option>
          <option value="aceites">Aceites</option>
          <option value="harinas">Harinas</option>
        </select>
      </div>
    </aside>
  )
}

export default FilterProducts
