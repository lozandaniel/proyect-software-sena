import { useState, useEffect } from 'react'
import ListProducts from '../components/Products/ListProducts'
import FilterProducts from '../components/Products/FilterProducts'
import axios from 'axios'

function Products() {
  /* Estado que ayuda a elegir el filtro de categorias */
  const [filters, setFilters] = useState({
    category: 'all',
  })
  const [listToProducts, setListToProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/v1/products')
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
      <h2 className="font-bold text-3xl">Nuestros Productos</h2>
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

      <div className="flex flex-col lg:flex-row my-12">
        <FilterProducts onChange={(newFilters) => setFilters(newFilters)} />
        {listProductsFilter.length > 0 ? (
          <ListProducts products={listProductsFilter} />
        ) : (
          <p>No se encuentran productos</p>
        )}
      </div>
    </>
  )
}

export default Products
