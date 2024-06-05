import { useCart } from '../../hooks/useCart'

function OrderSummary() {
  const { cartItems, totalCart } = useCart()

  return (
    <div className="mx-2 my-11 w-4/12 flex-none rounded-lg bg-neutral-100 p-8">
      <header>
        <h3 className="text-lg font-bold">Resumen del pedido</h3>
      </header>
      <div className="flex h-full flex-col justify-between">
        <section className="flex-1 overflow-y-auto">
          {cartItems.map((item) => (
            <article
              key={item.productId}
              className="flex items-center border-b-2 py-4"
            >
              <div className="flex w-36 items-center justify-center">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm">{item.name}</h4>
                <span className="text-sm">Cantidad: {item.quantity}</span>
                <span className="font-semibold">Precio: {item.price}</span>
              </div>
            </article>
          ))}
        </section>
        <section className="flex justify-between py-2">
          <h4 className="text-md font-bold">Total</h4>
          <span className="font-semibold tracking-widest">${totalCart}</span>
        </section>
      </div>
    </div>
  )
}

export default OrderSummary
