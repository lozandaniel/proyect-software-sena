import { useState } from 'react'
import { AddPlusIcon } from '../../icons/Icons'
import ListInventory from './ListInventory'
import axios from 'axios'
import { useEffect } from 'react'

function Inventory() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(!isOpen)
  }

  const [listInventory, setListInventory] = useState([])

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/inventorys'
        )
        setListInventory(response.data)
      } catch (error) {
        console.error('Error fetching inventory table:', error)
        // Manejar el error
      }
    }
    console.log(listInventory)

    fetchInventory()
  }, [])

  return (
    <>
      <div>
        <header className="my-4 border-b-2 py-2">
          <h2 className="text-3xl font-bold">Inventario de Productos</h2>
          <p className="font-light">
            Gestiona tus productos fácilmente. Aquí puedes añadir nuevos
            productos, actualizar la información existente, ajustar las
            cantidades en stock y eliminar productos obsoletos. Mantén tu
            inventario organizado y actualizado para asegurar una administración
            eficiente
          </p>
        </header>

        <section className="flex gap-x-4 items-center justify-between">
          <div className="bg-[#ff7d20] hover:bg-primaryColor/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
            Total de inventarios actuales
            <span>{listInventory.length}</span>
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

        {listInventory.length === 0 && (
          <p className="text-gray-800 pt-2">
            No se encuentras productos en el inventario
          </p>
        )}

        <ListInventory listInventory={listInventory} />
      </div>
    </>
  )
}

export default Inventory
