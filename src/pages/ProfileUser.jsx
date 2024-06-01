import { useUser } from '../components/hooks/useUser'
import { DeleteIcon } from '../icons/Icons'

function ProfileUser() {
  const { user } = useUser()
  console.log(user)

  if (user === null) {
    <h1>Usuario sin datos</h1>
  }

  return (
    <div className="p-6 my-10 flex">
      <aside className="w-72 mr-16">
        <nav className="flex flex-col h-full justify-between">
          <ul className="flex flex-col gap-2 p-3 font-semibold border-b-2">
            <li className="rounded-md inline-flex items-center">Perfil</li>
            <li className="rounded-md inline-flex items-center">Dirección</li>
            <li className="rounded-md inline-flex items-center">
              <button>Cerrar Sesión</button>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-red-600 font-semibold mt-auto p-3">
            <li className="flex gap-x-2 items-center">
              <DeleteIcon />
              <button>Eliminar cuenta</button>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Mi perfil</h2>
          <p className="text-sm">
            Asegúrate de que tu información esté siempre actualizada y completa
            para aprovechar al máximo tu experiencia.
          </p>
        </header>
        <section>
          <p className="text-lg font-semibold">Bienvenido, {user?.name}</p>
          <span className="text-gray-600 text-sm">{user?.email}</span>
        </section>
        <section className="gap-6 my-10s">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm w-full  px-10 py-4 rounded-lg border border-solid border-neutral-200">
            <h3 className="text-md font-medium text-gray-700">
              Información basica
            </h3>
            <button className="bg-primaryColor hover:bg-primaryColor/90 text-white font-medium py-2 px-4 rounded-lg ">
              Editar Perfil
            </button>
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
    </div>
  )
}

export default ProfileUser

/* 
<div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Dirección
            </h3>
            <span>{user?.direction}</span>
            <p className="text-gray-600">
              <strong>Ciudad:</strong> {user?.city}
            </p>
          </div> */
