import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axiosConfig'
import InputCategory from '../InputCategory'

function OrderCard() {
  const [infoOrder, setInfoOrder] = useState(null)
  const { orderId } = useParams()

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axiosInstance.get(`/orders/order/${orderId}`)
        setInfoOrder(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrder()
  }, [orderId])

  return (
    <div className="my-16">
      <nav className="text-sm">
        <Link className="text-primaryColor" to="/">
          Inicio
        </Link>{' '}
        /{' '}
        <Link
          className="hover:text-red-700"
          onClick={() => window.history.back()}
        >
          Volver
        </Link>
      </nav>

      <h2 className="my-2 text-2xl font-semibold">Información del pedido</h2>

      <section className="rounded-lg border p-6 shadow-lg">
        <header className="flex justify-between">
          <article className="mb-4">
            <h3 className="my-4 text-xl font-semibold">
              Pedido ID #{infoOrder?.orderId}
            </h3>
            <div>
              <p>
                <span className="text-gray-600">Fecha del pedido:</span>{' '}
                {infoOrder?.buyDate}
              </p>
            </div>
          </article>
          <div>
            <InputCategory className="bg-[#fcc9b3] text-orange-600">
              {infoOrder?.status}
            </InputCategory>
          </div>
        </header>

        <ul className="border-y-2">
          {infoOrder?.listOrderItems.map((item) => (
            <li key={item?.orderItemId} className="flex px-4">
              <div className="my-2 flex h-32 w-1/5">
                <img
                  src={`/${item?.product?.imageUrl}`}
                  alt={item?.product?.name}
                  className="mx-auto object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center">
                <span className="text-lg font-light text-gray-700">
                  {item?.product?.name}
                </span>
                <div>
                  <p className="flex gap-2 text-sm">
                    <span className="text-neutral-800">
                      ID #{item?.product?.productId}
                    </span>
                    /
                    <span className="text-neutral-800">
                      {item?.product?.category}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="text-neutral-800">
                      Proveedor: {item?.product?.provider?.name}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4">
                <span className="font-bold text-neutral-800">
                  {item?.price}
                </span>
                <span className="text-sm text-gray-500">
                  Cantidad: {item?.quantity}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <article className="mb-4 flex border-b-2 py-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Metodo de pago</h3>
            <span>{infoOrder?.paymentMethod?.typePaymentMethod}</span>
          </div>
          <adress className="flex-1">
            <h3 className="text-lg font-semibold">Direccion de cliente</h3>
            <span className="text-sm text-gray-600">Dirección</span>
            <div className="font-light">
              <p>{infoOrder?.client?.direction}</p>
              <p>Ciudad</p>
            </div>
          </adress>
        </article>

        <article className="flex flex-col items-end gap-y-2">
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="font-light">{infoOrder?.total}</span>
        </article>
      </section>
    </div>
  )
}

export default OrderCard
