import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import OrderSummary from './OrderSummary'
import CustomButton from '../CustomButton'

function CheckoutPage() {
  const [selectedMethodPay, setSelectedMethodPay] = useState(null)
  const { cartItems } = useCart()
  const [cashAmount, setCashAmount] = useState('')
  console.log(cartItems)
  console.log(selectedMethodPay)

  const [currentStep, setCurrentStep] = useState(1)

  let formattedCartItems = cartItems.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
  }))

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleConfirmPayment = () => {
    // Lógica para confirmar el pago, por ejemplo, enviar los datos del pedido al servidor
    // Aquí puedes realizar la lógica necesaria para confirmar el pago, como enviar los datos del pedido al servidor
    // Una vez confirmado el pago, podrías redirigir al usuario a una página de confirmación de pedido o agradecerle por su compra.
    console.log('Pago confirmado:', cashAmount, { formattedCartItems })
  }

  /* const handleConfirmOrder = async () => {
    let formattedCartItems = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }))
    try {
      const response = await axios.post('URL_DEL_ENDPOINT', {
        clientId,
        cartItems: formattedCartItems,
      })

      // Si la solicitud se completa con éxito, redirige al usuario a la página de confirmación
      history.push('/confirmation')
    } catch (error) {
      // Si hay un error en la solicitud, maneja el error adecuadamente (mostrar un mensaje de error, etc.)
      console.error('Error al finalizar el pedido:', error)
    }
  }
 */
  const payMethod = ['Tarjeta Bancaria', 'Efectivo', 'PSE']

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full flex bg-white">
      <div className="flex-1 flex flex-col mt-11 w-full justify-between">
        <div className="w-full max-w-[520px] my-10 mx-auto">
          {currentStep === 1 && (
            <>
              <header>
                <h2 className="pb-2 text-xl font-bold">
                  Elige un método de pago
                </h2>
                <p className="text-sm pb-6">
                  Realiza tus transacciones de forma segura y conveniente con
                  este método de pago confiable.
                </p>
              </header>
              <div>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  {payMethod.map((method) => (
                    <li key={method}>
                      <button
                        onClick={() => setSelectedMethodPay(method)}
                        className={`text-start p-4 border border-solid rounded-lg font-semibold border-neutral-300 bg-transparent w-full h-max hover:scale-105 transition-all ${
                          selectedMethodPay === method
                            ? 'border-primaryColor'
                            : ''
                        }`}
                      >
                        {method}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <CustomButton onClick={handleNextStep}>Confirmar</CustomButton>
            </>
          )}
          {currentStep === 2 && (
            <>
              <header>
                <h2 className="font-bold pb-2 text-xl">Pago en efectivo</h2>
                <p className="pb-6 text-sm">
                  Realiza tus transacciones de forma segura y conveniente con
                  este método de pago confiable.
                </p>
              </header>
              <input
                className="bg-gray-50 border p-2.5 rounded-md text-sm focus:border-blue-500 outline-none w-full"
                type="number"
                placeholder="Ingrese el monto en efectivo"
                required
                onChange={(e) => setCashAmount(e.target.value)}
                value={cashAmount}
              />
              <div className="flex gap-4">
                <CustomButton onClick={handlePreviousStep}>
                  Regresar
                </CustomButton>
                <CustomButton onClick={handleNextStep}>Continuar</CustomButton>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div>
              <header>
                <h2 className="font-bold pb-2 text-xl">
                  Confirmación de compra
                </h2>
              </header>
              <p>Monto en efectivo: ${cashAmount}</p>
              <div className="flex gap-4">
                <CustomButton onClick={handlePreviousStep}>
                  Regresar
                </CustomButton>
                <CustomButton onClick={handleConfirmPayment}>
                  Confirmar
                </CustomButton>
              </div>
            </div>
          )}
        </div>
        <div className="border-t-2 mx-10 py-10 text-end text-gray-700 text-sm">
          <h2>© 2024 Distriquesos Charles</h2>
        </div>
      </div>

      <OrderSummary />
    </div>
  )
}

export default CheckoutPage
