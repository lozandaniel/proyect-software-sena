function ListClient({ listClient }) {
  return (
    <section className="my-4">
      <div className="sm:rounded-lg my-4">
        <table className="w-full border-collapse border text-sm text-left">
          <thead className="bg-primaryColor/80 text-xs text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Rol Name</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Identificación</th>
              <th className="px-4 py-2">Telefono</th>
              <th className="px-4 py-2">Correo</th>
              <th className="px-4 py-2">Direccion</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listClient.map((client) => (
              <tr key={client?.clientId} className="bg-white border-b">
                <th className="px-4 py-2">{client?.clientId}</th>
                <th className="px-4 py-2">{client?.rol?.rol}</th>
                <td className="px-4 py-2">{client?.name}</td>
                <td className="px-4 py-2">{client?.identification}</td>
                <td className="px-4 py-2">{client?.phone}</td>
                <td className="px-4 py-2">{client?.email}</td>
                <td className="px-4 py-2">{client?.direction}</td>
                <td className="px-4 py-2">{client?.date}</td>
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
    </section>
  )
}

export default ListClient
