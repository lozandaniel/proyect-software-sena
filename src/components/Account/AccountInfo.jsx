import { EditIcon } from '../../icons/Icons'
import { useUser } from '../../hooks/useUser'

function AccountInfo() {
  const { user } = useUser()
  return (
    <div>
      <header className="mb-6 items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Mi perfil</h2>
        <p className="text-sm">
          Asegúrate de que tu información esté siempre actualizada y completa
          para aprovechar al máximo tu experiencia.
        </p>
      </header>
      <section>
        <p className="text-lg font-semibold">Bienvenido, {user?.name}</p>
        <span className="text-sm text-gray-600">{user?.email}</span>
      </section>
      <section className="my-10 gap-6">
        <div className="grid w-full grid-cols-1 gap-6 rounded-lg border border-solid border-neutral-200 px-10 py-4 text-sm md:grid-cols-2">
          <header className="col-span-2 flex justify-between">
            <h3 className="text-md font-semibold text-gray-700">
              Información basicas
            </h3>
            <button className="rounded-lg border font-medium hover:border-primaryColor/70">
              <EditIcon />
            </button>
          </header>
          <p className="text-gray-600">
            <strong>Nombre:</strong> {user?.name}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {user?.email}
          </p>
          <p className="text-gray-600">
            <strong>Numero de identificación:</strong> {user?.identification}
          </p>
          <p className="text-gray-600">
            <strong>Teléfono:</strong> {user?.phone}
          </p>
        </div>
      </section>
    </div>
  )
}

export default AccountInfo
