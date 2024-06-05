import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../components/Admin/CustomInput'
import axiosInstance from '../utils/axiosConfig'

function Register() {
  const [dataForm, setDataForm] = useState({
    direction: '',
    email: '',
    identification: 0,
    name: '',
    password: '',
    phone: 0,
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDataForm({ ...dataForm, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post('/user/register', dataForm)
      if (response.status === 201) {
        navigate('/login')
        toast.success('Usuario creado con exito', {
          position: 'top-center',
        })
      }
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data)
    }

    console.log(dataForm)
  }

  // Vista para registrar usuario
  return (
    <div className="flex min-h-svh">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <Link to="/">
        <img
          src="/logo-distriquesos.png"
          alt="Logo distriquesos charles"
          className="absolute right-10 top-10 z-10 w-72"
        />
      </Link>
      <div className="mx-auto flex w-[43.75rem] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Crea tu cuenta aquí</h1>
        <p className="mb-2 text-center text-lg">
          Únete ahora y accede a todo lo que necesitas con un solo registro.
          ¡Regístrate en segundos para comenzar
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5 flex flex-col gap-1">
            <CustomInput
              id="name"
              label="Nombre"
              onChange={handleInputChange}
              placeholder="Nombre completo"
              required
            />
            <CustomInput
              id="email"
              label="Correo Electronico"
              onChange={handleInputChange}
              placeholder="tuemail@gmail.com"
              required
              type="email"
            />

            <CustomInput
              id="identification"
              label="Numero de identificación "
              onChange={handleInputChange}
              placeholder="Ej: 123456789"
              required
              type="number"
            />

            <CustomInput
              id="phone"
              label="Numero Telefonico"
              onChange={handleInputChange}
              placeholder="Numero telefonico"
              required
              type="number"
            />

            <CustomInput
              id="direction"
              label="Direccion de residencia"
              onChange={handleInputChange}
              placeholder="Direccion de residencia"
              required
              type="text"
            />

            <CustomInput
              id="password"
              label="Contraseña"
              onChange={handleInputChange}
              placeholder="Contraseña (mínimo 8 caracteres)"
              required
              type="password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primaryColor p-2 font-medium text-white"
          >
            Registrarme
          </button>
        </form>

        <div className="py-4 text-red-600">
          {errors.message && <p>{errors.message}</p>}
        </div>

        <p className="font-light">
          ¿Ya tienes una cuenta?
          <span className="mx-2 font-medium transition hover:text-primaryColor">
            <Link to="/login">Inicia Sesion aquí</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
