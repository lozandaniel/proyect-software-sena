import { products } from '../../utils/products'

/* Ultimos productos */
function LatestProducts() {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="absolute top-0 -z-10 h-full bg-white">
        <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] -translate-x-[-80%] translate-y-[70%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <h2 className="text-3xl font-semibold col-span-2">
        Conoce nuestros ultimos productos
      </h2>
      <section className="grid grid-cols-2 gap-2 w-9/12 py-4 items-center mx-auto">
        {products.slice(0, 2).map((product) => (
          <article
            key={product.id}
            className="w-full rounded-md ring-1 ring-gray-300  max-w-72 mx-auto text-center"
          >
            <div className="w-full h-80 inline-block rounded-t-md">
              <img
                className="w-full h-full rounded-t-md object-contain object-center"
                src={product.images[0]}
                alt={product.title}
                style={{
                  aspectRatio: '16/9',
                }}
              />
            </div>

            <div className="bg-neutral-100 py-4">
              <h3 className="font-semibold">{product.title}</h3>
              <span>${product.price}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default LatestProducts
