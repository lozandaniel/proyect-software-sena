import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import CustomInput from '../components/Admin/CustomInput'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

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
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/login',
        dataForm
      )
      localStorage.setItem('userInfo', JSON.stringify(response.data))
      console.log(response.data)
      navigate(response.data.rol.rol === 'admin' ? '/view/admin/dashboard' : '/')
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data)
      toast.error(error.response.data.message)
    }

    console.log(dataForm)
  }

  if (localStorage.getItem('userData')) {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const { role } = userData

    // Redireccionar al dashboard o a la sección correspondiente según el rol
    history.push(role === 'admin' ? '/admin' : '/') // Cambia '/admin' y '/user' por las rutas correspondientes
    return null // Evitar renderizar el formulario de login si el usuario ya está autenticado
  }

  /* Vista de Inicio de sesión  */
  return (
    <div className="min-h-screen flex">
      <Toaster />
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

        <form onSubmit={handleSubmit} className="w-full px-2">
          <div className="flex flex-col my-5 gap-2">
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
            className="bg-primaryColor text-white font-semibold w-full rounded-md p-2"
          >
            Iniciar Sesión
          </button>
        </form>

        <div>{errors.message && <p>{errors.message}</p>}</div>

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
