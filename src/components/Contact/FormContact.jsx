function FormContact() {
  return (
    <div className="flex-1 px-20 py-6 md:py-0">
      <h2 className="text-2xl font-semibold">Formulario PQR's</h2>
      <form action="">
        <div>
          <label
            htmlFor=""
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre"
            className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Apellidos
          </label>
          <input
            type="text"
            placeholder="Apellidos"
            className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Tipo de documento
          </label>
          <input
            type="text"
            placeholder="DNI / CC / TI"
            className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Numero de documento
          </label>
          <input
            type="text"
            placeholder="Número de documento (sin espacios ni guiones)"
            className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500 "
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Numero telefonico
          </label>
          <input
            type="text"
            placeholder="Número de teléfono móvil"
            className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500 "
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Correo Electronico
          </label>
          <input
            type="text"
            placeholder="Ejemplo: ejemplo@correo.com"
            className="bg-gray-50 w-full p-2.5 border rounded-md text-sm outline-none focus:border-blue-500 "
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Categorias
          </label>
          <select
            name="category"
            id="category"
            className="w-full bg-gray-50 border text-sm rounded-md focus:border-blue-500 p-2.5"
          >
            <option value="all" selected disabled>
              ---
            </option>
            <option value="quesos">Peticion</option>
            <option value="lacteos">Queja</option>
            <option value="lacteos">Reclamos</option>
            <option value="lacteos">Información</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Cuéntenos su inquietud
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-neutral-200 focus:ring-blue-500  focus:ring-1 resize-none outline-none"
            placeholder="Holas"
          ></textarea>
        </div>
        <button
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center w-full my-2"
        >
          Enviar
        </button>
      </form>
      <p className="text-sm">
        Acepto la política de privacidad de{' '}
        <span className="font-semibold">Distriquesos Charles</span>
      </p>
    </div>
  )
}

export default FormContact
