import { useState, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { infoInputInventory } from '../Utils/InfoInputInventory'
import CustomInput from '../CustomInput'
import axios from 'axios'

let initialInventory = {
  stock: 0,
  classification: '',
  lot: 0,
  minStock: 0,
  maxStock: 0,
  status: '',
}

function AddInventory({ setIsOpen, setInventoryList, inventoryList, isEdit }) {
  const [formData, setFormData] = useState(initialInventory)
  const [productsList, setProductsList] = useState([])
  const [productSelect, setProductSelect] = useState(null)

  console.log(productSelect)

  useEffect(() => {
    const fetchProductsWithoutInventory = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/products/inventory'
        )
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
        name === 'stock' ||
        name === 'maxStock' ||
        name === 'minStock' ||
        name === 'lot'
          ? Number(value)
          : value,
    }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()

    console.log(formData)

    try {
      const response = isEdit
        ? await axios.put(
            `http://localhost:8080/api/v1/inventory/${isEdit.providerId}/update`,
            formData
          )
        : await axios.post(
            `http://localhost:8080/api/v1/inventory/${productSelect}`,
            formData
          )
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
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        onSubmit={handleSubmitForm}
        className="grid-cols-2 grid gap-x-12 gap-y-1 bg-white p-10 rounded-lg relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white font-semibolds absolute right-4 top-4 bg-primaryColor hover:bg-primaryColor/90 py-1 px-2 rounded-md"
        >
          X
        </button>

        <label htmlFor="select-product">
          Productos
          <select
            required
            onChange={(e) => setProductSelect(e.target.value)}
            name="product"
            id="select-product"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-400"
            defaultValue={productSelect}
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
            key={infoInput.id}
            id={infoInput.id}
            onChange={handleChange}
            type={infoInput.type}
            label={infoInput.label}
            placeholder={infoInput.placeholder}
            defaultValue={formData[infoInput.id] || ''}
          />
        ))}

        <button
          type="submit"
          className="text-white col-span-2 bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center w-full my-2"
        >
          Crear Inventario
        </button>
      </form>
    </div>
  )
}

export default AddInventory
