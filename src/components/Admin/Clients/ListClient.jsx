import { AddPlusIcon } from '../../../icons/Icons'
import DataTable from '../DataTable'

function ListClient() {
  const clientesData = [
    {
      id_cliente: 1,
      id_rol: 1,
      nombre: 'Daniel Lozano Aguilar',
      contraseña: 'contraseña1',
      identificacion: 1234567890,
      telefono: 9876543210,
      correo_electronico: 'cliente1@example.com',
      direccion: 'Calle 123, Ciudad A',
    },
    {
      id_cliente: 2,
      id_rol: 1,
      nombre: 'Adriana Aguilar Riaño',
      contraseña: 'contraseña2',
      identificacion: 2345678901,
      telefono: 8765432109,
      correo_electronico: 'cliente2@example.com',
      direccion: 'Avenida 456, Ciudad B',
    },
    {
      id_cliente: 3,
      id_rol: 1,
      nombre: 'Cliente 3',
      contraseña: 'contraseña3',
      identificacion: 3456789012,
      telefono: 7654321098,
      correo_electronico: 'cliente3@example.com',
      direccion: 'Plaza 789, Ciudad C',
    },
    {
      id_cliente: 4,
      id_rol: 1,
      nombre: 'Cliente 4',
      contraseña: 'contraseña4',
      identificacion: 4567890123,
      telefono: 6543210987,
      correo_electronico: 'cliente4@example.com',
      direccion: 'Avenida XYZ, Ciudad D',
    },
  ]

  return (
    <div>
      <header className="py-4">
        <h2 className="text-3xl font-bold">Clientes</h2>
        <p className="border-b-2 font-light">
          Ingresa los detalles básicos del cliente, como su nombre,
          identificación, contacto y dirección, para mantener un registro
          preciso de tus clientes.
        </p>
      </header>

      <section className="flex gap-x-4 items-center justify-between">
        <div className="bg-green-700 hover:bg-green-700/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
          Total de productos
          <span>{clientesData.length}</span>
        </div>

        <button
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 justify-center inline-flex self-end"
        >
          <AddPlusIcon />
          Agregar nuevo proveedor
        </button>
      </section>

      <section className="my-4">
        <DataTable data={clientesData} />
      </section>
    </div>
  )
}

export default ListClient
