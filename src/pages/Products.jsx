import { useState } from 'react'
import FilterProducts from '../components/Products/FilterProducts'
import ListProducts from '../components/Products/ListProducts'
import { products } from '../utils/products'

function Products() {
  const [filters, setFilters] = useState({
    category: 'all',
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return filters.category === 'all' || product.category === filters.category
    })
  }

  const listProductsFilter = filterProducts(products)

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
        <FilterProducts onChange={setFilters} />
        <ListProducts products={listProductsFilter} />
      </div>
    </>
  )
}

export default Products
