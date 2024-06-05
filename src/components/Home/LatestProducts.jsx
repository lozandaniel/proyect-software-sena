import { products } from '../../utils/products'
/* Ultimos productos */
function LatestProducts() {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="absolute top-0 -z-10 h-full bg-white">
        <div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] -translate-x-[-80%] translate-y-[70%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <h2 className="col-span-2 text-3xl font-semibold">
        Conoce nuestros ultimos productos ✨
      </h2>
      <section className="mx-auto grid w-9/12 grid-cols-2 items-center gap-2 py-4">
        {products.slice(0, 2).map((product) => (
          <article
            key={product.id}
            className="mx-auto w-full max-w-72 rounded-md text-center ring-1 ring-gray-300"
          >
            <div className="inline-block h-80 w-full rounded-t-md">
              <img
                className="h-full w-full rounded-t-md object-contain object-center"
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
