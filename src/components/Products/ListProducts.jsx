import CardProduct from './CardProduct'

function ListProducts({ products }) {
  // Vista de productos
  return (
    <ul className="grid grid-cols-1 gap-4 px-20 py-4 md:w-9/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <CardProduct key={product?.productId} product={product} />
      ))}
    </ul>
  )
}

export default ListProducts
