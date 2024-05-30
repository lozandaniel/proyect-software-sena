import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

function Cart() {
  /* UI de vista de carrito de compras */
  const { cart, deleteProduct } = useCart()
  const [quantity, setQuantity] = useState(1)

  const calculateTotalPrice = (listProduct) => {
    let total = 0
    listProduct.forEach((product) => {
      total += parseFloat(product.price)
    })
    return total
  }

  const totalPriceCart = calculateTotalPrice(cart)

  return (
    <div className="flex">
      <Toaster />
      <section className="pb-4 w-4/5">
        <h2 className="font-bold text-2xl">Carrito de compras</h2>
        {cart.length > 0 ? (
          cart.map((product) => (
            <article key={product.productId} className="flex border-b-2 px-4">
              <div className="flex w-1/5 h-48 justify-center">
                <img
                  src={product.imageUrl}
                  alt="Suero Costeño"
                  className="object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between py-4">
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="text-sm text-green-500">Disponible</span>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Precio: </span>{' '}
                    {product.price}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Código:</span>{' '}
                    {product.productId}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Proveedor:</span>{' '}
                    {product.provider.name}
                  </p>
                </div>
                <div className="flex gap-x-2 justify-between  text-sm">
                  <div className="flex item-center gap-x-2 text-sms">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1)
                        }
                      }}
                      type="button"
                      className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-1 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg py-1.5 text-center inline-flex justify-center items-center px-2"
                    >
                      -
                    </button>
                    <p className="flex items-center">Cantidad: {quantity}</p>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      type="button"
                      className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-1 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg py-1.5 text-center inline-flex justify-center items-center px-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      deleteProduct(product.productId)
                      toast.success('Producto eliminado del carrito', {
                        position: 'top-right',
                        style: { backgroundColor: '#D4EDDA' },
                      })
                    }}
                    className="text-red-500"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>Vaya... No tienes productos en tu carrito aun</p>
        )}
      </section>
      <section className="w-1/5 flex flex-col border border-neutral-200 self-start p-2 rounded-md">
        <h5 className="font-semibold my-1">Resumen de Compra: Total a pagar</h5>
        <div className="flex flex-col justify-between gap-2">
          <div className="inline-flex justify-between border-b-2">
            <h2 className="font-semibold text-neutral-400">Subtotal</h2>
            <span className="">${totalPriceCart}</span>
          </div>

          <div className="inline-flex justify-between">
            <h2 className="font-semibold text-neutral-400">Total</h2>
            <span className="">${totalPriceCart}</span>
          </div>
        </div>
        <button
          disabled={cart.length <= 0}
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 mt-2 flex-grow inline-flex justify-center disabled:bg-slate-500"
        >
          Pagar Ahora
        </button>
      </section>
    </div>
  )
}

export default Cart
