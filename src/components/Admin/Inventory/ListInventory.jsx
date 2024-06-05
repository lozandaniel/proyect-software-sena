function ListInventory({ listInventory, deleteRow }) {
  return (
    <div className="my-4 overflow-x-auto bg-white p-4 sm:rounded-lg">
      <table className="w-full border-collapse border text-left text-sm">
        <thead className="bg-primaryColor/80 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Producto ID</th>
            <th className="px-4 py-2">Nombre Proveedor</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Clasificación</th>
            <th className="px-4 py-2">Min Stock</th>
            <th className="px-4 py-2">Max Stock</th>
            <th className="px-4 py-2">Batch</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Precio Compra</th>
            <th className="px-4 py-2">Precio Venta</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listInventory.map((inventory) => (
            <tr key={inventory?.inventoryId} className="border-b bg-white">
              <th className="px-4 py-2">{inventory?.inventoryId}</th>
              <td className="px-4 py-2">{inventory?.product?.productId}</td>
              <td className="px-4 py-2">
                {inventory?.product?.provider?.name}
              </td>
              <td className="px-4 py-2">{inventory?.stock}</td>
              <td className="px-4 py-2">{inventory?.classification}</td>
              <td className="px-4 py-2">{inventory?.minStock}</td>
              <td className="px-4 py-2">{inventory?.maxStock}</td>
              <td className="px-4 py-2">{inventory?.batch}</td>
              <td className="px-4 py-2">{inventory?.status}</td>
              <td className="px-4 py-2">{inventory?.buyPrice}</td>
              <td className="px-4 py-2">{inventory?.sellPrice}</td>
              <td className="flex flex-row gap-x-2 px-4 py-2">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Editar
                </a>
                <button onClick={() => deleteRow(inventory?.inventoryId)}>
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

export default ListInventory
