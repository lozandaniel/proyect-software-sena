import { useEffect, useState } from 'react'
import FilterProducts from '../components/Products/FilterProducts'
import ListProducts from '../components/Products/ListProducts'
import axiosInstance from '../utils/axiosConfig'

function Products() {
  /* Estado que ayuda a elegir el filtro de categorias */
  const [filters, setFilters] = useState({
    category: 'all',
  })
  const [listToProducts, setListToProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get('/products')
        setListToProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  // Funcion que permite consultar los filtros que se estan pasando al estado
  const filterProducts = (products) => {
    if (!products) return []
    return products.filter((product) => {
      return filters.category === 'all' || product.category === filters.category
    })
  }

  const listProductsFilter = filterProducts(listToProducts)

  return (
    <>
      <h2 className="text-3xl font-bold">Nuestros Productos</h2>
      {/* <nav className=" w-full mx-auto flex justify-center">
        <ul className="grid grid-cols-5 w-1/2 text-center font-semibold">
          <li>Quesos</li>
          <li>Harinas</li>
          <li>Arequipes</li>
          <li>Bocadillos</li>
          <li>Mantequillas</li>
          <li>Grasas</li>
          <li>Hojaldres</li>
          <li>Suero</li>
          <li>Mojes</li>
          <li>Levaduras</li>
        </ul>
      </nav> */}

      <div className="my-12 flex flex-col items-center lg:flex-row lg:items-start">
        <FilterProducts onChange={(newFilters) => setFilters(newFilters)} />
        {listProductsFilter.length > 0 ? (
          <ListProducts products={listProductsFilter} />
        ) : (
          <p className="mx-4 italic">
            Ups, no se encuentran productos en este momento.
          </p>
        )}
      </div>
    </>
  )
}

export default Products
