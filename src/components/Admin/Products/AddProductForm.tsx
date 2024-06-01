import React, { useState, useEffect } from 'react'
import CustomInput from '../CustomInput'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { infoInputProduct } from '../Utils/InfoInputProduct'

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
  setIsOpen,
  setListProducts,
  listProducts,
  productToEdit,
}) {
  const [newProduct, setNewProduct] = useState<Product>(initialProduct)
  const [providersList, setProvidersList] = useState<any[]>([])

  const categoryList = [
    'Lácteos',
    'Panadería y Repostería',
    'Productos Frescos',
    'Carnes y Embutidos',
    'Conservas',
    'Gourmet',
    'Bebidas',
    'Harinas',
    'Aceites',
    'Levaduras',
    'Repostería',
  ]

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/providers'
        )
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
        ? await axios.put(
            `http://localhost:8080/api/v1/products/${productToEdit.productId}/update`,
            newProduct
          )
        : await axios.post('http://localhost:8080/api/v1/products', newProduct)

      const responseData = response.data

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
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        onSubmit={handleSubmitProduct}
        className="grid-cols-2 grid gap-x-16 gap-y-1 bg-white p-10 rounded-lg relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white font-semibolds absolute right-4 top-4 bg-primaryColor hover:bg-primaryColor/90 py-1 px-2 rounded-md"
        >
          X
        </button>
        <label htmlFor="select-provider">
          Proveedor
          <select
            required
            disabled={productToEdit}
            onChange={handleChange}
            name="provider"
            id="select-provider"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-400"
            defaultValue={productToEdit ? newProduct.provider : ''}
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
            required
            key={camp.id}
            onChange={handleChange}
            id={camp.id}
            label={camp.label}
            placeholder={camp.placeholder}
            type={camp.type}
            value={newProduct[camp.id]}
          />
        ))}

        <label htmlFor="select-provider">
          Categoria:
          <select
            required
            onChange={handleChange}
            name="category"
            id="select-category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
            onChange={handleChange}
            id="description"
            name="description"
            rows={6}
            className="inline-block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-neutral-200 focus:ring-blue-500  focus:ring-1 resize-none outline-none"
            placeholder="Ingrese una breve descripción"
            value={newProduct.description}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white col-span-2 bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center w-full my-2"
        >
          {productToEdit ? 'Guardar Producto' : 'Crear Producto'}
        </button>
      </form>
    </div>
  )
}

export default AddProductForm
