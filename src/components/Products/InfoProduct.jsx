import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartIcon } from '../../icons/Icons'
import axios from 'axios'
import { useCart } from '../hooks/useCart'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

function InfoProduct() {
  const { addCart } = useCart()
  const [product, setProduct] = useState(null)

  /* Id buscado */
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/products/${id}`
        )
        console.log(res.data)
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
      position: 'top-right',
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
      <div className="flex flex-col md:flex-row py-32">
        <Toaster />
        <div className="md:flex-1 px-4 flex flex-col items-center justify-center">
          <img
            src={`/${product?.imageUrl}`}
            alt={product?.name}
            className="mb-4 transition-all max-w-96 max-h-96"
          />
          <div className="grid grid-cols-5 gap-4">
            <div key={product?.productId} className="size-28">
              <img
                src={`/${product?.imageUrl}`}
                className="w-full h-full object-cover"
                alt="Hola"
              />
            </div>
          </div>
        </div>
        <div className="md:flex-1 px-10 bg-neutral-100 rounded-md py-4 self-start">
          <div className="inline-flex justify-between w-full">
            <h2 className="text-2xl font-bold ">{product?.name}</h2>
          </div>
          <div className="flex my-2 justify-between">
            <div>
              <span className="font-bold text-gray-700 ">Precio: </span>
              <span className="text-gray-600 ">${product?.price}</span>
            </div>
            <div>
              <span className="font-bold text-gray-700 ">
                Unidades disponibles:
              </span>
              <span className="text-gray-600"> {product?.quantity}</span>
            </div>
          </div>
          <div>
            <span className="font-bold text-gray-700 ">
              Descripción del producto
            </span>
            <p className="text-gray-600 mt-2">{product?.description}</p>
          </div>
          <div className="flex flex-col my-4">
            <span className="font-semibold text-gray-700">
              Codigo: {product?.productId}
            </span>
            <span className="font-semibold text-gray-700">
              Vendedor: {product?.provider?.name}
            </span>
          </div>
          <div className="flex justify-between gap-x-6">
            <button
              onClick={addProductToCart}
              type="button"
              className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center"
            >
              <ShoppingCartIcon />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoProduct
