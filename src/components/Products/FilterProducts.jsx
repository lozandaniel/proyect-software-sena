import { categoryList } from '../../utils/categoryList'

function FilterProducts({ onChange }) {
  /* Filtro de busqueda cuando cambia la categoria */
  const handleChangeCategory = (e) => {
    onChange((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }

  return (
    <aside className="mx-auto flex w-full flex-col lg:mx-0 lg:w-3/12">
      <h3 className="mb-5 text-2xl font-bold">Filtrar por</h3>
      <div>
        <label htmlFor="category" className="block text-sm">
          Categorias
        </label>
        <select
          className="block w-full rounded-lg border border-[#E0E0E0] bg-neutral-100 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          defaultValue="all"
          id="category"
          name="category"
          onChange={handleChangeCategory}
        >
          <option value="all" selected>
            Todos
          </option>
          {categoryList.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </aside>
  )
}

export default FilterProducts
