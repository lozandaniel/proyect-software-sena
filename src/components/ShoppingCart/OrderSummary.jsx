import { useCart } from '../hooks/useCart'

function OrderSummary() {
  const { cartItems, totalCart } = useCart()

  return (
    <div className="flex-none w-4/12 bg-neutral-100 my-11 mx-2 p-8 rounded-lg">
      <header>
        <h3 className="text-lg font-bold">Resumen del pedido</h3>
      </header>
      <div className="flex flex-col h-full justify-between">
        <section className="flex-1 overflow-y-auto">
          {cartItems.map((item) => (
            <article
              key={item.productId}
              className="border-b-2 flex items-center py-4"
            >
              <div className="flex items-center justify-center w-36">
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
        <section className="py-2 flex justify-between">
          <h4 className="text-md font-bold">Total</h4>
          <span className="font-semibold tracking-widest">${totalCart}</span>
        </section>
      </div>
    </div>
  )
}

export default OrderSummary
