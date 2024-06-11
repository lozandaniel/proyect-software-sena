import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../components/Admin/CustomInput'
import axiosInstance from '../utils/axiosConfig'

function Login() {
  const [dataForm, setDataForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosInstance.post('/user/login', dataForm)
      const { data } = response
      console.log(response.data)
      switch (data.rol.rol) {
        case 'admin':
          navigate('/view/admin/dashboard')
          break

        case 'empleado':
          navigate('/view/employee')
          break

        default:
          navigate('/view/profile')
      }
    } catch (error) {
      console.log(error.message)
      setErrors(error.response.data)
      toast.error(error.response.data.message)
    }
  }

  /* if (localStorage.getItem('userData')) {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const { role } = userData

    // Redireccionar al dashboard o a la sección correspondiente según el rol
    history.push(role === 'admin' ? '/admin' : '/') // Cambia '/admin' y '/user' por las rutas correspondientes
    return null // Evitar renderizar el formulario de login si el usuario ya está autenticado
  } */

  /* Vista de Inicio de sesión  */
  return (
    <div className="flex min-h-screen">
      <Toaster />
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <Link to="/">
        <img
          src="/logo-distriquesos.png"
          alt="Logo distriquesos charles"
          className="absolute left-10 top-10 z-10 w-72"
        />
      </Link>
      <div className="mx-auto flex w-[43.75rem] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Bienvenido!</h1>
        <p className="font-semibolds text-lg">Inicia sesión en tu cuenta</p>

        <form onSubmit={handleSubmit} className="w-full px-2">
          <div className="my-5 flex flex-col gap-2">
            <CustomInput
              onChange={handleInputChange}
              value={dataForm.email}
              id="email"
              label="Correo Electronico / Usuario"
              placeholder="tuemail@gmail.com"
            />
            <CustomInput
              onChange={handleInputChange}
              value={dataForm.password}
              id="password"
              type="password"
              label="Contraseña"
              placeholder="Contraseña (mínimo 8 caracteres)"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primaryColor p-2 font-semibold text-white"
          >
            Iniciar Sesión
          </button>
        </form>

        <div>{errors.message && <p>{errors.message}</p>}</div>

        <p className="m-4 font-light">
          ¿Olvidaste tu contraseña? /{' '}
          <span className="font-medium transition hover:text-primaryColor">
            <Link to="/register">Registrate Gratis</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
