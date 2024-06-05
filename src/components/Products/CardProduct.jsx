import { Link } from 'react-router-dom'
import { ShoppingBagAdd } from '../../icons/Icons'
import InputCategory from '../InputCategory'

function CardProduct({ product }) {
  return (
    <li className="mx-auto w-full max-w-60 rounded-md bg-neutral-100 ring-1 ring-gray-300">
      <Link to={`/products/${product?.productId}`}>
        <div className="inline-block h-40 w-full rounded-t-md">
          <img
            src={product.imageUrl}
            className="h-full w-full rounded-t-md object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <h4 className="text-sm font-semibold">{product?.name}</h4>
          <InputCategory className="bg-[#0070F0]/20 text-xs font-semibold text-[#0070F0]">
            {product.category}
          </InputCategory>
          <p className="text-md">$ {product.price}</p>
          <button
            className="inline-flex items-center justify-center gap-x-1 rounded-lg bg-primaryColor py-2 text-center text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-2 focus:ring-primaryColor/50"
            type="button"
          >
            <ShoppingBagAdd />
            Agregar
          </button>
        </div>
      </Link>
    </li>
  )
}

export default CardProduct
