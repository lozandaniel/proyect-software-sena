import FormContact from '../components/Contact/FormContact'
import { EmailForwardIcon, HeadphonesIcon, WhatsappIcon } from '../icons/Icons'

function Contact() {
  return (
    <>
      <div className="my-14 flex flex-col py-4 md:flex-row">
        <FormContact />
        <div className="relative h-1/2 flex-1 bg-green-800">
          <img
            src="https://voxsur.com/wp-content/uploads/elementor/thumbs/callcenter-pg69gdxjm3djaj75rjgsna5umfbc8pqbjlbqirsw5a.jpg"
            alt="Image call-center"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-primaryColor/40 opacity-70"></div>
          <h3 className="absolute left-0 top-0 p-4 text-2xl font-bold text-black">
            Contactanos en DistriQuesos Charles
          </h3>
          <p className="absolute bottom-0 left-0 p-4 text-black">
            En DistriQuesos CHARLES, no vemos el contacto como una simple
            interacción, sino como el inicio de una conversación que puede
            cambiar el juego.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between border-t-2 py-4 md:flex-row">
        <div>
          <h4 className="text-2xl font-semibold text-primaryColor">
            Medios de comunicación alternativos
          </h4>
          <p className="text-sm">
            Descubre más formas de comunicarte con nosotros.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-12 py-4 text-center md:py-0">
          <div className="flex flex-col items-center justify-center">
            <HeadphonesIcon className="size-32" />
            <span>Llámanos al</span>
            <span className="font-bold">(601) 717 98 63</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <WhatsappIcon className="size-32" />
            <span>Whatsapp</span>
            <span className="font-bold">(+57) 324 201 12 56</span>
          </div>
          <div className="flex flex-col items-center justify-center px-2">
            <EmailForwardIcon className="size-32" />
            <span>Distriquesos@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
