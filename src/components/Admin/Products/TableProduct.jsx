import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function TableProduct({ setListProducts, listProducts, onEditClick }) {
  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/products/${id}`
      )
      const filteredProduct = listProducts.filter(
        (product) => product.productId !== id
      )
      setListProducts(filteredProduct)
      toast(response.data.message, {
        position: 'top-right',
      })
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className="sm:rounded-lg my-4 overflow-x-auto p-4 bg-white">
      <Toaster />
      <table className="w-full border-collapse border text-sm text-left table-auto">
        <thead className="bg-primaryColor/80 text-xs text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre Proveedor</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Categoria</th>
            <th className="px-4 py-2">Cantidad</th>
            <th className="px-4 py-2">Imagen</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((product) => (
            <tr key={product?.productId} className="bg-white border-b">
              <th className="px-4 py-2">{product?.productId}</th>
              <td className="px-4 py-2">{product?.provider?.name}</td>
              <td className="px-4 py-2">{product?.name}</td>
              <td className="px-4 py-2">{product?.description}</td>
              <td className="px-4 py-2">{product?.price}</td>
              <td className="px-4 py-2">{product?.category}</td>
              <td className="px-4 py-2">{product?.quantity}</td>
              <td className="px-4 py-2">{product?.imageUrl}</td>
              <td className="px-4 py-2 flex flex-row gap-x-2">
                <button
                  onClick={() => onEditClick(product)}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Editar
                </button>
                <button onClick={() => handleDeleteProduct(product?.productId)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableProduct
