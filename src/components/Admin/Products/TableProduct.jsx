import toast, { Toaster } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'

function TableProduct({ setListProducts, listProducts, onEditClick }) {
  const handleDeleteProduct = async (id) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`)
      const filteredProduct = listProducts.filter(
        (product) => product.productId !== id
      )
      console.log(response)
      setListProducts(filteredProduct)
      toast(response.data.message, {
        position: 'top-right',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="my-4 overflow-x-auto bg-white p-4 sm:rounded-lg">
      <Toaster />
      <table className="w-full table-auto border-collapse border text-left text-sm">
        <thead className="bg-primaryColor/80 text-xs uppercase text-gray-700">
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
            <tr key={product?.productId} className="border-b bg-white">
              <th className="px-4 py-2">{product?.productId}</th>
              <td className="px-4 py-2">{product?.provider?.name}</td>
              <td className="px-4 py-2">{product?.name}</td>
              <td className="px-4 py-2">{product?.description}</td>
              <td className="px-4 py-2">{product?.price}</td>
              <td className="px-4 py-2">{product?.category}</td>
              <td className="px-4 py-2">{product?.quantity}</td>
              <td className="px-4 py-2">{product?.imageUrl}</td>
              <td className="flex flex-row gap-x-2 px-4 py-2">
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
