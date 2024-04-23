import { Link } from 'react-router-dom'

function Login() {
  /* Vista de Inicio de sesión  */
  return (
    <div className="min-h-screen flex">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <Link to="/">
        <img
          src="/logo-distriquesos.png"
          alt="Logo distriquesos charles"
          className="w-72 absolute top-10 z-10 left-10"
        />
      </Link>
      <div className="mx-auto w-[43.75rem] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Bienvenido!</h1>
        <p className="text-xl font-semibolds">Inicia sesión en tu cuenta</p>

        <form action="" className="w-full px-2">
          <div className="flex flex-col my-5 gap-2">
            <label htmlFor="username" className="flex flex-col font-semibold">
              Correo Electronico / Usuario
              <input
                type="text"
                name="username"
                placeholder="tuemail@gmail.com"
                className="w-full font-normal rounded-md p-2 border border-neutral-200"
              />
            </label>
            <label htmlFor="password" className="flex flex-col font-semibold">
              Contraseña
              <input
                type="password"
                name="password"
                placeholder="Contraseña (mínimo 8 caracteres)"
                className="w-full font-normal rounded-md p-2 border border-neutral-200"
              />
            </label>
          </div>
          <button className="bg-primaryColor text-white font-semibold w-full rounded-md p-2">
            Iniciar Sesión
          </button>
        </form>

        <p className="font-light m-4">
          ¿Olvidaste tu contraseña? /{' '}
          <span className="font-medium  hover:text-primaryColor transition">
            <Link to="/register">Registrate Gratis</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
