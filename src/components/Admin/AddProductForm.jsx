import CustomInput from './CustomInput'

function AddProductForm({ setIsOpen }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70">
      <form className="grid-cols-2 grid gap-x-16 gap-y-1 bg-white p-10 rounded-lg relative">
        <button
          onClick={() => setIsOpen(false)}
          className="text-white font-bold absolute right-4 top-4 bg-primaryColor hover:bg-primaryColor/90 py-1 px-2 rounded"
        >
          X
        </button>
        <CustomInput id="name" label="Nombre" placeholder="Felipe Federin" />
        <CustomInput
          id="provider"
          label="Proveedor"
          placeholder="Seleccione una Proveedor"
        />
        <CustomInput
          id="quantity"
          label="Cantidad"
          placeholder="Indique una cantidad"
        />
        <CustomInput
          id="Categoria"
          label="Categoria"
          placeholder="Felipe Federin"
        />
        <CustomInput
          id="precio-compra"
          label="Precio de Compra"
          placeholder="Indique Precio de Compra"
        />
        <CustomInput
          id="precio-venta"
          label="Precio de Venta"
          placeholder="Indique Precio de Venta"
        />
        <CustomInput
          id="f-caducidad"
          label="Fecha de Caducidad"
          type="date"
          placeholder="Felipe Federin"
        />
        <div className="inline-block">
          <label htmlFor="">Disponible en Stock</label>
          <input type="checkbox" className="mx-4" />
        </div>
        <div className="col-span-2">
          <label htmlFor="message">Descripción</label>
          <textarea
            id="message"
            rows="6"
            className="inline-block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-neutral-200 focus:ring-blue-500  focus:ring-1 resize-none outline-none"
            placeholder="Ingrese una breve descripción"
          ></textarea>
        </div>
        <button
          type="button"
          className="text-white col-span-2 bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center w-full my-2"
        >
          Guardar Producto
        </button>
      </form>
    </div>
  )
}

export default AddProductForm
