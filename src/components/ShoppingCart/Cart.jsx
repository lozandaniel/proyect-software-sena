import { Toaster, toast } from 'react-hot-toast'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'

function Cart() {
  /* UI de vista de carrito de compras */
  const { cartItems, deleteProduct, totalCart, updateQuantity } = useCart()

  return (
    <div className="flex">
      <Toaster />
      <section className="pb-4 w-4/5">
        <h2 className="font-bold text-2xl">Carrito de compras</h2>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
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
                    <p>Cantidad:</p>
                    <button
                      onClick={() => {
                        if (product.quantity > 1) {
                          updateQuantity(
                            product.productId,
                            product.quantity - 1
                          )
                        }
                      }}
                      type="button"
                      className="text-white bg-primaryColor hover:bg-primaryColor/70 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                    >
                      -
                    </button>
                    <span>{product?.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.productId, product.quantity + 1)
                      }
                      type="button"
                      className="text-white bg-primaryColor hover:bg-primaryColor/70 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
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
            <span className="">${totalCart}</span>
          </div>

          <div className="inline-flex justify-between">
            <h2 className="font-semibold text-neutral-400">Total</h2>
            <span className="">${totalCart}</span>
          </div>
        </div>
        <Link to="/checkout" className="rounded-lg">
          <button
            disabled={cartItems.length <= 0}
            type="button"
            className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1  text-sm py-2 items-center px-4 mt-2 flex-grow inline-flex justify-center disabled:bg-slate-500"
          >
            Pagar Ahora
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Cart
