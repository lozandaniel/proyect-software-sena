import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className="min-h-svh flex">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <Link to="/">
      <img
        src="/logo-distriquesos.png"
        alt="Logo distriquesos charles"
        className="w-72 absolute top-10 z-10 right-10"
      />
      </Link>
      <div className="mx-auto w-[43.75rem] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Crea tu cuenta aquí</h1>
        <p className="text-xl font-semibolds mb-5">
          Únete ahora y accede a todo lo que necesitas con un solo registro.
          ¡Regístrate en segundos para comenzar
        </p>

        <form action="" className="w-full">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="flex flex-col font-semibold">
              Nombre
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre completo"
                className="w-full font-normal rounded-md p-2 border border-neutral-200"
              />
            </label>
            <label htmlFor="email" className="flex flex-col font-semibold">
              Contraseña
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tuemail@gmail.com"
                className="w-full font-normal rounded-md p-2 border border-neutral-200"
              />
            </label>
            <label htmlFor="password" className="flex flex-col font-semibold">
              Contraseña
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña (mínimo 8 caracteres)"
                className="w-full font-normal rounded-md p-2 border border-neutral-200"
              />
            </label>
            <label htmlFor="password-2" className="flex flex-col font-semibold">
              Repetir Contraseña
              <input
                type="password"
                id="password"
                name="password-2"
                placeholder="Contraseña (mínimo 8 caracteres)"
                className="w-full font-normal rounded-md p-2 border border-neutral-200"
              />
            </label>
          </div>
          <button className="bg-primaryColor text-white font-semibold w-full rounded-md p-2">
            Registrarme
          </button>
        </form>

        <p className="font-light m-4">
          ¿Ya tienes una cuenta?{' '}
          <span className="font-medium  hover:text-primaryColor transition">
            <Link to="/login">Inicia Sesion aquí</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
