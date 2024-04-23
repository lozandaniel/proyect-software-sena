function Cart() {
  /* UI de vista de carrito de compras */
  return (
    <div className="flex">
      <section className="pb-4 w-4/5">
        <h2 className="font-bold text-2xl">Carrito de compras</h2>
        <article className="flex border-b-2">
          <div className="flex w-1/5 h-48 justify-center">
            <img
              src="/sueros/suero-costeño.png"
              alt="Suero Costeño"
              className="object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between py-4">
            <div>
              <h3 className="text-lg font-semibold">
                Brillo del Caribe: Suero Costeño
              </h3>
              <span className="text-sm text-green-500">Disponible</span>
            </div>
            <div>
              <p className="text-sm">
                <span className="font-semibold">Código:</span> 312321
              </p>
              <p className="text-sm">
                <span className="font-semibold">Proveedor:</span> Angelita
              </p>
            </div>
            <div className="flex gap-x-2">
              <p className="text-sm">Cantidad: 4</p>
              <button className="text-sm text-red-500">Eliminar</button>
            </div>
          </div>
        </article>
        <article className="flex">
          <div className="flex w-1/5 h-48 justify-center">
            <img
              src="/bocadillos/bocadillo-sol.png"
              alt="Suero Costeño"
              className="object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between py-4">
            <div>
              <h3 className="text-lg font-semibold">
                Brillo del Caribe: Suero Costeño
              </h3>
              <span className="text-sm text-green-500">Disponible</span>
            </div>
            <div>
              <p className="text-sm">
                <span className="font-semibold">Código:</span> 312321
              </p>
              <p className="text-sm">
                <span className="font-semibold">Proveedor:</span> Angelita
              </p>
            </div>
            <div className="flex gap-x-2">
              <p className="text-sm">Cantidad: 4</p>
              <button className="text-sm text-red-500">Eliminar</button>
            </div>
          </div>
        </article>
      </section>
      <section className="w-1/5 flex flex-col border border-neutral-200 self-start p-2 rounded-md">
        <h5 className="font-semibold my-1">Resumen de Compra: Total a pagar</h5>
        <div className="flex flex-col justify-between gap-2">
          <div className="inline-flex justify-between border-b-2">
            <h2 className="font-semibold text-neutral-400">Subtotal</h2>
            <span className="">$24.500</span>
          </div>

          <div className="inline-flex justify-between">
            <h2 className="font-semibold text-neutral-400">Total</h2>
            <span className="">$24.500</span>
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 mt-2 flex-grow inline-flex justify-center"
        >
          Pagar Ahora
        </button>
      </section>
    </div>
  )
}

export default Cart
