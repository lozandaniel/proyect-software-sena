import { Link } from 'react-router-dom'
import InputCategory from '../InputCategory'
import { ShoppingBagAdd } from '../../icons/Icons'

function CardProduct({ product }) {
  return (
    <li className="w-full rounded-md ring-1 ring-gray-300 bg-neutral-100 max-w-60 mx-auto">
      <Link to={`/products/${product?.productId}`}>
        <div className="w-full h-40 inline-block  rounded-t-md">
          <img
            src={product.imageUrl}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <h4 className="font-semibold text-sm">{product?.name}</h4>
          <InputCategory
            title={product.category}
            className={'bg-[#0070F0]/20 text-[#0070F0] font-semibold text-xs'}
          />
          <p className="text-md">$ {product.price}</p>
          <button
            type="button"
            className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 text-center inline-flex justify-center items-center"
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
