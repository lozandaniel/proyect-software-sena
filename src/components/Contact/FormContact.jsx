import { infoInputContact } from '../../utils/infoInputContactForm'
import CustomInput from '../Admin/CustomInput'

function FormContact() {
  return (
    <div className="flex-1 px-20 py-6 md:py-0">
      <h2 className="text-2xl font-semibold">Formulario PQR's</h2>
      <form>
        {infoInputContact.map((input) => (
          <CustomInput
            id={input.id}
            key={input.id}
            label={input.label}
            placeholder={input.placeholder}
            required
            styleLabel="after:ml-0.5 after:text-red-500 after:content-['*']"
            type={input.type}
          />
        ))}
        <div>
          <label
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
            htmlFor="category"
          >
            Categorias
          </label>
          <select
            className="w-full rounded-md border bg-gray-50 p-2.5 text-sm focus:border-blue-500"
            id="category"
            name="category"
          >
            <option value="all" selected disabled>
              ---
            </option>
            <option value="peticion">Peticion</option>
            <option value="queja">Queja</option>
            <option value="reclamos">Reclamos</option>
            <option value="informacion">Información</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Cuéntenos su inquietud
          </label>
          <textarea
            className="block w-full resize-none rounded-md border border-neutral-200 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:ring-1 focus:ring-blue-500"
            id="message"
            placeholder="Ingresa aqui tu inquietuds"
            rows="4"
          ></textarea>
        </div>
        <button
          className="my-2 inline-flex w-full flex-grow items-center justify-center gap-x-1 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
          type="button"
        >
          Enviar
        </button>
      </form>
      <p className="text-sm">
        Acepto la política de privacidad de
        <span className="font-semibold">Distriquesos Charles</span>
      </p>
    </div>
  )
}

export default FormContact
