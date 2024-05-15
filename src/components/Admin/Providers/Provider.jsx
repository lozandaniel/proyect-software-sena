import { AddPlusIcon } from '../../../icons/Icons'
import DataTable from '../DataTable'

function Provider() {
  const data = [
    {
      id_proveedor: 1,
      nombre: 'Proveedor A',
      telefono: 1234567890,
      identificacion: 9876543210,
      direccion: 'Calle 123, Ciudad A',
      catalogo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ciudad: 'Ciudad A',
    },
    {
      id_proveedor: 2,
      nombre: 'Proveedor B',
      telefono: 2345678901,
      identificacion: 8765432109,
      direccion: 'Avenida 456, Ciudad B',
      catalogo:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ciudad: 'Ciudad B',
    },
    {
      id_proveedor: 3,
      nombre: 'Proveedor C',
      telefono: 3456789012,
      identificacion: 7654321098,
      direccion: 'Plaza 789, Ciudad C',
      catalogo:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ciudad: 'Ciudad C',
    },
  ]

  return (
    <div>
      <header className="py-4">
        <h2 className="text-3xl font-bold">Proveedores</h2>
        <p className="border-b-2 font-light">Gestiona tus proveedores</p>
      </header>

      <section className="flex gap-x-4 items-center justify-between">
        <div className="bg-red-700 hover:bg-red-700/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
          Total de productos
          <span>{data.length}</span>
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
        <DataTable data={data} />
      </section>
    </div>
  )
}

export default Provider
