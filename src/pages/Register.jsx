import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CustomInput from '../components/Admin/CustomInput'

function Register() {
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    password: '',
    identification: 0,
    phone: 0,
    direction: '',
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/register',
        dataForm
      )
      console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data)
    }

    console.log(dataForm)
  }
  // Vista para registrar usuario
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

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col mb-5 gap-1">
            <CustomInput
              onChange={handleInputChange}
              id="name"
              label="Nombre"
              placeholder="Nombre completo"
            />
            <CustomInput
              onChange={handleInputChange}
              type="email"
              id="email"
              label="Correo Electronico"
              placeholder="tuemail@gmail.com"
            />

            <CustomInput
              onChange={handleInputChange}
              type="number"
              id="identification"
              label="Numero de identificación "
              placeholder="Ej: 123456789"
            />

            <CustomInput
              onChange={handleInputChange}
              type="number"
              id="phone"
              label="Numero Telefonico"
              placeholder="Numero telefonico"
            />

            <CustomInput
              onChange={handleInputChange}
              type="text"
              id="direction"
              label="Direccion (Opcional)"
              placeholder="Direccion de residencia"
            />
            <CustomInput
              onChange={handleInputChange}
              type="password"
              id="password"
              label="Contraseña"
              placeholder="Contraseña (mínimo 8 caracteres)"
            />
          </div>
          <button
            type="submit"
            className="bg-primaryColor text-white font-medium w-full rounded-md p-2"
          >
            Registrarme
          </button>
        </form>

        <div className="text-red-600 py-4">
          {errors.message && <p>{errors.message}</p>}
        </div>

        <p className="font-light">
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
