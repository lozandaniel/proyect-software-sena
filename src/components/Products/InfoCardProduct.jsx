import { ShoppingCartIcon } from '../../icons/Icons'

function InfoCardProduct({ productos }) {
  return (
    <div className="md:flex-1 px-10 bg-neutral-100 rounded-md py-4 self-start">
      <div className="inline-flex justify-between w-full">
        <h2 className="text-2xl font-bold ">{productos?.title}</h2>
        <span className="text-xl font-bold italic">150gr</span>
      </div>
      <div className="flex my-2">
        <div className="">
          <span className="font-bold text-gray-700 ">Precio: </span>
          <span className="text-gray-600 ">{productos?.price}</span>
          <span className="font-bold text-gray-700 ">
            Unidades disponibles:{' '}
          </span>
          <span className="text-gray-600">100 Stock</span>
        </div>
      </div>
      <div>
        <span className="font-bold text-gray-700 ">Descripción: </span>
        <p className="text-gray-600 mt-2">{productos?.description}</p>
      </div>
      <div className="flex flex-col my-4">
        <span className="font-semibold text-gray-700">Codigo: 12345</span>
        <span className="font-semibold text-gray-700">Marca: Alpina</span>
      </div>
      <div className="flex justify-between gap-x-6">
        <div className="flex gap-1">
          <button
            type="button"
            className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 text-center inline-flex justify-center items-center px-4"
          >
            +
          </button>
          <button
            type="button"
            className="text-white bg-primaryColor/30 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 text-center inline-flex justify-center items-center px-4"
          >
            1
          </button>
          <button
            type="button"
            className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 text-center inline-flex justify-center items-center px-4"
          >
            -
          </button>
        </div>
        <button
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center"
        >
          <ShoppingCartIcon />
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default InfoCardProduct
