import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { ShoppingCartIcon } from '../../icons/Icons'
import axiosInstance from '../../utils/axiosConfig'

function InfoProduct() {
  const [product, setProduct] = useState(null)
  const { addCart } = useCart()

  /* Id buscado */
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/products/${id}`)
        setProduct(res.data)
      } catch (error) {
        console.error('Failed to fetch product:', error)
      }
    }

    fetchProduct()
  }, [id])

  const addProductToCart = () => {
    addCart(product)
    toast.success('Producto añadido al carrito', {
      iconTheme: '#0070F0',
      position: 'top-center',
    })
  }

  // Seleccion de la primera imagen que aparece en el array de product
  /* const [selectImage, setSelectImage] = useState(products?.imageUrl)

  console.log(selectImage)
  const handleHoverProductImage = (image) => {
    // Seleccion de una imagen cuando se encuentran varias en el array de datos (Images)
    setSelectImage(image)
  } */

  return (
    <>
      <div className="flex flex-col py-32 md:flex-row">
        <Toaster />
        <section className="flex flex-col items-center justify-center px-4 md:flex-1">
          <img
            src={`/${product?.imageUrl}`}
            alt={product?.name}
            className="mb-4 max-h-96 max-w-96 transition-all"
          />
          <div className="grid grid-cols-5 gap-4">
            <div key={product?.productId} className="size-28">
              <img
                src={`/${product?.imageUrl}`}
                className="h-full w-full object-cover"
                alt="Hola"
              />
            </div>
          </div>
        </section>
        <section className="self-start rounded-md bg-neutral-100 px-10 py-4 md:flex-1">
          <div className="inline-flex w-full justify-between">
            <h2 className="text-2xl font-bold">{product?.name}</h2>
          </div>
          <div className="my-2 flex justify-between">
            <div>
              <span className="font-bold text-gray-700">Precio: </span>
              <span className="text-gray-600">${product?.price}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700">
                Unidades disponibles
              </span>
              <span className="text-gray-600"> {product?.quantity}</span>
            </div>
          </div>
          <div>
            <span className="font-bold text-gray-700">
              Descripción del producto
            </span>
            <p className="mt-2 text-gray-600">{product?.description}</p>
          </div>
          <div className="my-4 flex flex-col">
            <span className="font-semibold text-gray-700">
              Codigo: {product?.productId}
            </span>
            <span className="font-semibold text-gray-700">
              Vendedor: {product?.provider?.name}
            </span>
          </div>
          <div className="flex justify-between gap-x-6">
            <button
              className="inline-flex flex-grow items-center justify-center gap-x-1 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-2 focus:ring-primaryColor/50"
              type="button"
              onClick={addProductToCart}
            >
              <ShoppingCartIcon />
              Añadir al carrito
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default InfoProduct
