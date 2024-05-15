function ListInventory() {
  return (
    <div className="sm:rounded-lg my-4">
      <table className="w-full border-collapse border text-sm text-left">
        <thead className="bg-primaryColor/80  text-xs text-gray-700 uppercase  ">
          <tr>
            <th scope="col" className=" px-4 py-2">
              Id
            </th>
            <th scope="col" className=" px-4 py-2">
              Producto
            </th>
            <th scope="col" className=" px-4 py-2">
              Descripción
            </th>
            <th scope="col" className=" px-4 py-2">
              Proveedor
            </th>
            <th scope="col" className=" px-4 py-2">
              Precio Venta
            </th>
            <th scope="col" className=" px-4 py-2">
              Estado
            </th>
            <th scope="col" className=" px-4 py-2">
              Categoria
            </th>
            <th scope="col" className=" px-4 py-2">
              Existencias
            </th>
            <th scope="col" className=" px-4 py-2">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
            >
              P001
            </th>
            <td className=" px-4 py-2">Queso Campesino</td>
            <td className=" px-4 py-2">
              Queso fresco tradicional colombiano, conocido por su textura suave
              y sabor suave, es un ingrediente fundamental en la cocina
              colombiana. Se utiliza en una variedad de platos, desde las
              emblemáticas arepas hasta las deliciosas empanadas. Su
              versatilidad lo convierte en una opción popular para acompañar
              comidas o como ingrediente principal en ensaladas y platos
              gratinados. ¡Una delicia que representa la riqueza culinaria de
              Colombia!
            </td>
            <td className="px-4 py-2">Alpina</td>
            <td className="px-4 py-2">$5000</td>
            <td className="px-4 py-2">Active</td>
            <td className="px-4 py-2">Lacteos</td>
            <td className="px-4 py-2">100</td>
            <td className="px-4 py-2 flex flex-row gap-x-2">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Editar
              </a>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListInventory
