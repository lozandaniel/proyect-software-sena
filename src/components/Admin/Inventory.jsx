import { useState } from 'react'
import AddProductForm from './AddProductForm'
import { AddPlusIcon } from '../../icons/Icons'
import ListInventory from './ListInventory'
function Inventory() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div>
        <header className="py-4">
          <h2 className="text-3xl font-bold">Inventario de Productos</h2>
          <p className="border-b-2 font-light">
            Gestiona tus productos fácilmente
          </p>
        </header>

        <section className="flex gap-x-4 items-center justify-between">
          <div className="bg-primaryColor hover:bg-primaryColor/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
            Total de productos
            <span>4</span>
          </div>

          <button
            onClick={openModal}
            type="button"
            className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 justify-center inline-flex self-end"
          >
            <AddPlusIcon />
            Agregar Producto
          </button>
        </section>

        {isOpen && <AddProductForm setIsOpen={setIsOpen} />}

        <ListInventory />
      </div>
    </>
  )
}

export default Inventory
