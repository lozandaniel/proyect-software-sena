import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../utils/products'
import InfoCardProduct from './InfoCardProduct'

function CardProduct() {
  /* Id buscado */
  const { id } = useParams()
  console.log(id)

  /* Busqueda del id que sea igual al del id del producto */
  const productos = products.find((product) => product.id === parseInt(id))
  console.log(productos)

  /* Seleccion de la primera imagen que aparece en el array de productos */
  const [selectImage, setSelectImage] = useState(productos?.images[0])

  console.log(selectImage)
  const handleHoverProductImage = (image) => {
    // Seleccion de una imagen cuando se encuentran varias en el array de datos (Images)
    setSelectImage(image)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row py-32">
        <div className="md:flex-1 px-4 flex flex-col items-center justify-center">
          <img
            src={selectImage}
            alt={productos?.title}
            className="mb-4 transition-all max-w-96 max-h-96"
          />
          <div className="grid grid-cols-5 gap-4">
            {productos?.images?.map((image, index) => (
              <div
                key={index}
                className="size-28"
                onMouseEnter={() => handleHoverProductImage(image)}
              >
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="Hola"
                />
              </div>
            ))}
          </div>
        </div>
        <InfoCardProduct productos={productos} />
      </div>
    </>
  )
}

export default CardProduct
