import FormContact from '../components/Contact/FormContact'
import { EmailForwardIcon, HeadphonesIcon, WhatsappIcon } from '../icons/Icons'

function Contact() {
  return (
    <>
      <div className="flex md:flex-row flex-col my-14 py-4">
        <FormContact />
        <div className="bg-green-800 flex-1 relative h-1/2">
          <img
            src="https://voxsur.com/wp-content/uploads/elementor/thumbs/callcenter-pg69gdxjm3djaj75rjgsna5umfbc8pqbjlbqirsw5a.jpg"
            alt="Call"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-primaryColor/40 opacity-70"></div>
          <h3 className="absolute top-0 left-0 text-black font-bold text-2xl p-4">
            Contactanos en DistriQuesos Charles
          </h3>
          <p className="absolute bottom-0 left-0 text-black p-4">
            En DistriQuesos CHARLES, no vemos el contacto como una simple
            interacción, sino como el inicio de una conversación que puede
            cambiar el juego.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  border-t-2 justify-between pt-4">
        <div>
          <h4 className="text-primaryColor text-2xl font-semibold">
            Medios de comunicación alternativos
          </h4>
          <p className="text-sm">
            Descubre más formas de comunicarte con nosotros.
          </p>
        </div>
        <div className="grid grid-cols-3 text-center gap-x-12 py-4 md:py-0">
          <div className="flex flex-col justify-center items-center">
            <HeadphonesIcon className="size-32" />
            <span>Llámanos al</span>
            <span className="font-bold">(601) 717 98 63</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <WhatsappIcon className="size-32" />
            <span>Whatsapp</span>
            <span className="font-bold">(+57) 324 201 12 56</span>
          </div>
          <div className="flex flex-col justify-center items-center px-2">
            <EmailForwardIcon className="size-32" />
            <span>Distriquesos@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
