import { useEffect, useState } from 'react'
import { AddPlusIcon } from '../../../icons/Icons'
import axiosInstance from '../../../utils/axiosConfig'
import AddProductForm from './AddProductForm'
import TableProduct from './TableProduct'

function ProductsInfo() {
  const [listProducts, setListProducts] = useState([{}])
  const [productToEdit, setProductToEdit] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(!isOpen)
    setProductToEdit(null)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products')
        setListProducts(response.data)
      } catch (error) {
        // Manejo del error
        console.error('Error fetching inventory table:', error)
      }
    }
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

      <section className="flex items-center justify-between gap-x-4">
        <div className="pointer-events-none flex flex-col rounded-lg bg-cyan-700 px-14 py-10 text-center text-xl font-semibold text-white hover:bg-cyan-700/90">
          Total de productos
          <span>{listProducts.length}</span>
        </div>

        <button
          onClick={openModal}
          type="button"
          className="inline-flex items-center justify-center gap-x-1 self-end rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-2 focus:ring-primaryColor/50"
        >
          <AddPlusIcon />
          Agregar nuevo producto
        </button>
      </section>

      {isOpen && (
        <AddProductForm
          listProducts={listProducts}
          productToEdit={productToEdit}
          setIsOpen={setIsOpen}
          setListProducts={setListProducts}
        />
      )}

      <section>
        <TableProduct
          listProducts={listProducts}
          onEditClick={editProduct}
          setListProducts={setListProducts}
        />
      </section>
    </div>
  )
}

export default ProductsInfo
