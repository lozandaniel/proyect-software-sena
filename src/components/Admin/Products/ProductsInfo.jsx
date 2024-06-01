import { useState, useEffect } from 'react'
import axios from 'axios'
import { AddPlusIcon } from '../../../icons/Icons'
import TableProduct from './TableProduct'
import AddProductForm from './AddProductForm'

function ProductsInfo() {
  const [listProducts, setListProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [productToEdit, setProductToEdit] = useState(null)

  const openModal = () => {
    setIsOpen(!isOpen)
    setProductToEdit(null)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/products'
        )
        setListProducts(response.data)
      } catch (error) {
        // Manejo del error
        console.error('Error fetching inventory table:', error)
      }
    }
    console.log(listProducts)

    fetchProducts()
  }, [])

  const editProduct = (product) => {
    setProductToEdit(product)
    console.log(product)
    setIsOpen(true)
  }

  console.log(listProducts)

  return (
    <div>
      <header className="my-4 border-b-2 py-2">
        <h2 className="text-3xl font-bold">Productos</h2>
        <p className="font-light">
          Ingresa los detalles básicos del cliente, como su nombre,
          identificación, contacto y dirección, para mantener un registro
          preciso de tus clientes.
        </p>
      </header>

      <section className="flex gap-x-4 items-center justify-between">
        <div className="bg-cyan-700 hover:bg-cyan-700/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
          Total de productos
          <span>{listProducts.length}</span>
        </div>

        <button
          onClick={openModal}
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-2 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 justify-center inline-flex self-end"
        >
          <AddPlusIcon />
          Agregar nuevo producto
        </button>
      </section>

      {isOpen && (
        <AddProductForm
          setIsOpen={setIsOpen}
          setListProducts={setListProducts}
          listProducts={listProducts}
          productToEdit={productToEdit}
        />
      )}

      <section>
        <TableProduct
          setListProducts={setListProducts}
          listProducts={listProducts}
          onEditClick={editProduct}
        />
      </section>
    </div>
  )
}

export default ProductsInfo
