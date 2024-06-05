import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { AddPlusIcon } from '../../../icons/Icons'
import axiosInstance from '../../../utils/axiosConfig'
import useDeleteItem from '../hooks/useDeleteItem'
import AddInventory from './AddInventory'
import ListInventory from './ListInventory'

function Inventory() {
  const [inventoryList, setInventoryList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(null)

  const { deleteItem } = useDeleteItem()

  const openModal = () => {
    setIsOpen(!isOpen)
    setIsEdit(null)
  }

  const handleEditInventory = (inventory) => {
    console.log(inventory)
  }

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axiosInstance.get('/inventory')
        setInventoryList(response.data)
      } catch (error) {
        console.error('Error fetching inventory table:', error)
        // Manejar el error
      }
    }

    fetchInventory()
  }, [])

  const deleteRow = async (id) => {
    console.log(id)
    const result = await deleteItem(`/inventory/${id}`)
    if (result.statusCode === 200) {
      console.log(result)
      const filterInventory = inventoryList.filter(
        (inventory) => inventory.inventoryId !== id
      )
      setInventoryList(filterInventory)

      toast.success(result.message, {
        position: 'top-center',
      })
    } else {
      // Manejo del error si el result es nulo o si el statusCode no es 200
      toast.error('Error al eliminar el ítem.', {
        position: 'top-center',
      })
    }
  }

  return (
    <>
      <div>
        <Toaster />
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

        <section className="flex items-center justify-between gap-x-4">
          <div className="pointer-events-none flex flex-col rounded-lg bg-[#ff7d20] px-14 py-10 text-center text-xl font-semibold text-white hover:bg-primaryColor/90">
            Total de inventarios actuales
            <span>{inventoryList.length}</span>
          </div>

          <button
            onClick={openModal}
            type="button"
            className="inline-flex items-center justify-center gap-x-1 self-end rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
          >
            <AddPlusIcon />
            Agregar Inventario nuevo
          </button>
        </section>

        {inventoryList.length === 0 && (
          <p className="pt-2 text-gray-800">
            No se encuentras productos en el inventario
          </p>
        )}

        {isOpen && (
          <AddInventory
            inventoryList={inventoryList}
            isEdit={isEdit}
            setInventoryList={setInventoryList}
            setIsOpen={setIsOpen}
          />
        )}

        <ListInventory listInventory={inventoryList} deleteRow={deleteRow} />
      </div>
    </>
  )
}

export default Inventory
