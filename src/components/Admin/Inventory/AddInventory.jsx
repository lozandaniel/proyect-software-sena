import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'
import CustomInput from '../CustomInput'
import { infoInputInventory } from '../utils/InfoInputInventory'

let initialInventory = {
  classification: '',
  lot: 0,
  maxStock: 0,
  minStock: 0,
  status: '',
  stock: 0,
}

function AddInventory({ setIsOpen, setInventoryList, inventoryList, isEdit }) {
  const [formData, setFormData] = useState(initialInventory)
  const [productSelect, setProductSelect] = useState(null)
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    const fetchProductsWithoutInventory = async () => {
      try {
        const response = await axiosInstance.get('/products/inventory')
        setProductsList(response.data)
      } catch (error) {
        console.log('Error al cargar los proveedores:', error)
      }
    }
    fetchProductsWithoutInventory()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === 'buyPrice' ||
        name === 'lot' ||
        name === 'maxStock' ||
        name === 'minStock' ||
        name === 'sellPrice' ||
        name === 'stock'
          ? Number(value)
          : value,
    }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()

    console.log(formData)

    try {
      const response = isEdit
        ? await axiosInstance.put(
            `/inventory/${isEdit.providerId}/update`,
            formData
          )
        : await axiosInstance.post(`/inventory/${productSelect}`, formData)
      console.log(response)
      if (isEdit) {
        const findInventory = inventoryList.map((inventory) =>
          inventory.inventoryId === isEdit.inventoryId
            ? response.data.data
            : inventory
        )
        setInventoryList(findInventory)
      } else {
        setInventoryList((prevState) => [...prevState, response.data.data])
      }
      setIsOpen(false)
      toast.success(response.data.message, {
        position: 'top-center',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        onSubmit={handleSubmitForm}
        className="relative grid grid-cols-2 gap-x-12 gap-y-1 rounded-lg bg-white p-10"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="font-semibolds absolute right-4 top-4 rounded-md bg-primaryColor px-2 py-1 text-white hover:bg-primaryColor/90"
        >
          X
        </button>

        <label htmlFor="select-product">
          Productos
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-400"
            defaultValue={productSelect}
            id="select-product"
            name="product"
            onChange={(e) => setProductSelect(e.target.value)}
            required
          >
            <option value="" selected disabled>
              Escoge un producto
            </option>
            {productsList.map((product) => (
              <option key={product?.productId} value={product?.productId}>
                {product?.productId} - {product?.name}
              </option>
            ))}
          </select>
        </label>

        {infoInputInventory.map((infoInput) => (
          <CustomInput
            defaultValue={formData[infoInput.id] || ''}
            id={infoInput.id}
            key={infoInput.id}
            label={infoInput.label}
            onChange={handleChange}
            placeholder={infoInput.placeholder}
            required
            type={infoInput.type}
          />
        ))}

        <button
          type="submit"
          className="col-span-2 my-2 inline-flex w-full flex-grow items-center justify-center gap-x-1 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
        >
          {isEdit ? 'Actualizar inventario' : 'Crear inventario'}
        </button>
      </form>
    </div>
  )
}

export default AddInventory
