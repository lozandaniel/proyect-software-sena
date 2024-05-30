import { Link } from 'react-router-dom'
import InputCategory from '../InputCategory'
import { ShoppingBagAdd } from '../../icons/Icons'
import CardProduct from './CardProduct'

function ListProducts({ products }) {
  // Vista de productos
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-9/12 py-4 px-20">
      {products.map((product) => (
        <CardProduct key={product?.productId} product={product} />
      ))}
    </ul>
  )
}

export default ListProducts
