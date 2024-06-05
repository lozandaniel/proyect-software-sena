import { DeleteIcon, EditIcon } from '../../icons/Icons'
import { useUser } from '../../hooks/useUser'

function AccountAdress() {
  const { user } = useUser()

  return (
    <section className="w-full gap-6">
      <header className="mb-6 items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Direcciones</h2>
        <p className="text-sm">Tus direcciones de envío, tu elección.</p>
      </header>
      <div className="grid w-full grid-cols-1 gap-6 rounded-lg border border-solid border-neutral-200 px-10 py-4 text-sm md:grid-cols-2">
        <header className="col-span-2 flex justify-between">
          <h3 className="text-md font-semibold text-gray-700">
            Direccion actual
          </h3>
          <div className="flex gap-x-2 transition-all">
            <button className="rounded-lg border font-medium hover:border-primaryColor/70">
              <EditIcon />
            </button>
            <button className="rounded-lg border text-red-600">
              <DeleteIcon />
            </button>
          </div>
        </header>
        <p className="text-gray-600">
          <strong>Direccion de residencia</strong> {user.direction}
        </p>
        <p className="text-gray-600">
          <strong>City</strong>
        </p>
      </div>
    </section>
  )
}

export default AccountAdress
