import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useUser } from '../../hooks/useUser'
import axiosInstance from '../../utils/axiosConfig'
import CustomButton from '../CustomButton'
import OrderSummary from './OrderSummary'

function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [inputPrice, setInputPrice] = useState('')
  const [priceError, setPriceError] = useState('')
  const [selectedMethodPay, setSelectedMethodPay] = useState([])
  const { cartItems, totalCart } = useCart()
  const { user } = useUser()

  const navigate = useNavigate()

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

  const handleConfirmPayment = async (e) => {
    e.preventDefault()
    const orderData = {
      clientId: user.clientId,
      paymentMethodId: selectedMethodPay.id,
      cartItems: cartItems,
    }

    console.log(orderData)
    // Lógica para confirmar el pago, por ejemplo, enviar los datos del pedido al servidor

    try {
      const res = await axiosInstance.post(`/orders`, orderData)
      if (res.status === 200) {
        toast.success('Pedido creado con éxito', {
          duration: 4000,
          position: 'top-center',
        })
        navigate(`/order/${res.data.data.orderId}`)
      }
      console.log(res)
    } catch (error) {
      console.error('Error al confirmar el pago:', error)
      toast.error(
        'Hubo un problema al procesar tu pedido. Por favor, intenta nuevamente.',
        {
          duration: 4000,
          position: 'top-center',
        }
      )
    }

    console.log('Pago confirmado:', inputPrice, { formattedCartItems })
  }

  const payMethod = [
    {
      id: 2,
      methodPay: 'Efectivo',
    },
  ]

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full bg-white">
      <Toaster />
      <div className="mt-11 flex w-full flex-1 flex-col justify-between">
        <div className="mx-auto my-10 w-full max-w-[520px]">
          {currentStep === 1 && (
            <>
              <header>
                <h2 className="pb-2 text-xl font-bold">
                  Elige un método de pago
                </h2>
                <p className="pb-6 text-sm">
                  Realiza tus transacciones de forma segura y conveniente con
                  este método de pago confiable.
                </p>
              </header>
              <div>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  {payMethod.map((method) => (
                    <li key={method.id}>
                      <button
                        className={`h-max w-full rounded-lg border border-solid border-neutral-300 bg-transparent p-4 text-start font-semibold transition-all hover:scale-105 ${
                          selectedMethodPay.methodPay === method.methodPay
                            ? 'border-primaryColor'
                            : ''
                        }`}
                        onClick={() => setSelectedMethodPay(method)}
                      >
                        {method.methodPay}
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
                <h2 className="pb-2 text-xl font-bold">Pago en efectivo</h2>
                <p className="pb-6 text-sm">
                  Realiza tus transacciones de forma segura y conveniente con
                  este método de pago confiable.
                </p>
              </header>
              <input
                className="w-full rounded-md border bg-gray-50 p-2.5 text-sm outline-none focus:border-blue-500"
                onChange={(e) => setInputPrice(e.target.value)}
                placeholder="Ingrese el monto en efectivo"
                required
                type="number"
                value={inputPrice}
              />
              {priceError && <p style={{ color: 'red' }}> {priceError} </p>}
              <div className="flex gap-4">
                <CustomButton onClick={handlePreviousStep}>
                  Regresar
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    if (parseFloat(inputPrice) !== totalCart) {
                      setPriceError(
                        'El precio ingresado no es igual al total del carro de compras!'
                      )
                      return
                    }
                    handleNextStep()
                  }}
                >
                  Continuar
                </CustomButton>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div>
              <header>
                <h2 className="pb-2 text-xl font-bold">
                  Confirmación de compra
                </h2>
              </header>
              <p>Monto en efectivo: ${inputPrice}</p>
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
        <div className="mx-10 border-t-2 py-10 text-end text-sm text-gray-700">
          <h2>© 2024 Distriquesos Charles</h2>
        </div>
      </div>

      <OrderSummary />
    </div>
  )
}

export default CheckoutPage
