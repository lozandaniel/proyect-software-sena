import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'
import { categoryList } from '../../../utils/categoryList'
import CustomInput from '../CustomInput'
import { infoInputProduct } from '../utils/InfoInputProduct'

interface Product {
  provider: {
    providerId: number
  }
  name: string
  description: string
  price: number
  category: string
  quantity: number
  imageUrl: string
}

let initialProduct: Product = {
  provider: {
    providerId: 0,
  },
  name: '',
  description: '',
  price: 0,
  category: '',
  quantity: 0,
  imageUrl: '',
}

function AddProductForm({
  listProducts,
  productToEdit,
  setIsOpen,
  setListProducts,
}) {
  const [newProduct, setNewProduct] = useState<Product>(initialProduct)
  const [providersList, setProvidersList] = useState<any[]>([])

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axiosInstance.get('/providers')
        setProvidersList(response.data)
      } catch (error) {
        console.log('Error al cargar los proveedores:', error)
      }
    }
    fetchProviders()
  }, [])

  useEffect(() => {
    if (productToEdit) {
      setNewProduct(productToEdit)
    } else {
      setNewProduct(initialProduct) // Reset form when productToEdit is null
    }
  }, [productToEdit])

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target
    const updatedValue =
      name === 'price' || name === 'quantity' ? parseFloat(value) : value

    if (name === 'provider') {
      console.log(newProduct)
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        provider: { providerId: parseFloat(value) },
      }))
      console.log(newProduct)
    } else {
      setNewProduct((prevProduct) => ({ ...prevProduct, [name]: updatedValue }))
    }
  }

  const handleSubmitProduct = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    console.log(newProduct)

    try {
      const response = productToEdit
        ? await axiosInstance.put(
            `/products/${productToEdit.productId}/update`,
            newProduct
          )
        : await axiosInstance.post('/products', newProduct)

      const responseData = response.data
      console.log(responseData)

      if (productToEdit) {
        setListProducts(
          listProducts.map((product) =>
            product.productId === productToEdit.productId
              ? responseData.data
              : product
          )
        )
        toast.success(responseData.message, {
          duration: 5000,
          icon: '✔',
        })
      } else {
        setListProducts((prevState) => [...prevState, responseData.data])
        toast.success('Producto agregado con exito', {
          duration: 5000,
          icon: '✔',
        })
      }
      setIsOpen(false)
    } catch (error) {
      console.log('Error al enviar el producto:', error)
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        onSubmit={handleSubmitProduct}
        className="relative grid grid-cols-2 gap-x-16 gap-y-1 rounded-lg bg-white p-10"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-md bg-primaryColor px-2 py-1 font-semibold text-white hover:bg-primaryColor/90"
        >
          X
        </button>
        <label htmlFor="select-provider">
          Proveedor
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-400"
            defaultValue={productToEdit ? newProduct.provider : ''}
            disabled={productToEdit}
            id="select-provider"
            name="provider"
            onChange={handleChange}
            required
          >
            <option value="" selected disabled>
              Escoge un proveedor
            </option>
            {providersList.map((provider) => (
              <option key={provider?.providerId} value={provider?.providerId}>
                {provider?.name}
              </option>
            ))}
          </select>
        </label>

        {infoInputProduct.map((camp) => (
          <CustomInput
            id={camp.id}
            key={camp.id}
            label={camp.label}
            onChange={handleChange}
            placeholder={camp.placeholder}
            required
            styleLabel=""
            type={camp.type}
            value={newProduct[camp.id]}
          />
        ))}

        <label htmlFor="select-provider">
          Categoria:
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            id="select-category"
            name="category"
            onChange={handleChange}
            required
            value={newProduct.category}
          >
            <option value="" selected disabled>
              Escoge una categoria
            </option>
            {categoryList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <div className="col-span-2">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="inline-block w-full resize-none rounded-md border border-neutral-200 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-blue-500"
            id="description"
            name="description"
            onChange={handleChange}
            placeholder="Ingrese una breve descripción"
            rows={6}
            value={newProduct.description}
          ></textarea>
        </div>
        <button
          className="col-span-2 my-2 inline-flex w-full flex-grow items-center justify-center gap-x-1 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
          type="submit"
        >
          {productToEdit ? 'Guardar Producto' : 'Crear Producto'}
        </button>
      </form>
    </div>
  )
}

export default AddProductForm
