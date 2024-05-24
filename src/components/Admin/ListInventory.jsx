function ListInventory({ listInventory }) {
  return (
    <div className="sm:rounded-lg my-4">
      <table className="w-full border-collapse border text-sm text-left">
        <thead className="bg-primaryColor/80 text-xs text-gray-700 uppercase">
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
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listInventory.map((inventory) => (
            <tr key={inventory?.inventoryId} className="bg-white border-b">
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
              <td className="px-4 py-2">{inventory?.date}</td>
              <td className="px-4 py-2 flex flex-row gap-x-2">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Editar
                </a>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListInventory
