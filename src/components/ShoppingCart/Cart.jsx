import { Toaster, toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

function Cart() {
  /* UI de vista de carrito de compras */
  const { cartItems, deleteProduct, totalCart, updateQuantity } = useCart()

  return (
    <div className="my-8 flex flex-col lg:flex-row">
      <Toaster />
      <section className="w-full pb-4 lg:w-9/12">
        <h2 className="text-2xl font-bold">Carrito de compras</h2>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <article key={product.productId} className="flex border-b-2 px-4">
              <div className="flex h-48 w-1/5 justify-center">
                <img
                  src={product.imageUrl}
                  alt="Suero Costeño"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between py-4">
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
                <div className="flex justify-between gap-x-2 text-sm">
                  <div className="item-center text-sms flex gap-x-2">
                    <strong>Cantidad:</strong>
                    <button
                      className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-primaryColor text-white hover:bg-primaryColor/70 focus:outline-none focus:ring-2 focus:ring-gray-100"
                      type="button"
                      onClick={() => {
                        if (product.quantity > 1) {
                          updateQuantity(
                            product.productId,
                            product.quantity - 1
                          )
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="font-normal">{product?.quantity}</span>
                    <button
                      className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-primaryColor text-white hover:bg-primaryColor/70 focus:outline-none focus:ring-2 focus:ring-gray-100"
                      type="button"
                      onClick={() =>
                        updateQuantity(product.productId, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="font-semibold text-red-500 hover:text-[#D32F2F]"
                    onClick={() => {
                      deleteProduct(product.productId)
                      toast.success('Producto eliminado del carrito', {
                        position: 'top-center',
                        style: { backgroundColor: '#D4EDDA' },
                      })
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>Vaya... Aun no tienes productos en tu carrito!</p>
        )}
      </section>
      <section className="flex w-full flex-col self-start rounded-md border border-neutral-200 p-2 lg:w-3/12">
        <h5 className="my-1 font-semibold">Resumen de Compra: Total a pagar</h5>
        <div className="flex flex-col justify-between gap-2">
          <div className="inline-flex justify-between border-b-2">
            <h2 className="font-semibold text-neutral-400">Subtotal</h2>
            <span>${totalCart}</span>
          </div>

          <div className="inline-flex justify-between">
            <h2 className="font-semibold text-neutral-400">Total</h2>
            <span>${totalCart}</span>
          </div>
        </div>
        <Link to="/checkout" className="rounded-lg">
          <button
            className="mt-2 inline-flex w-full flex-grow items-center justify-center gap-x-1 rounded-md bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-primaryColor/50 disabled:bg-slate-500"
            disabled={cartItems.length <= 0}
            type="button"
          >
            Pagar Ahora
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Cart
