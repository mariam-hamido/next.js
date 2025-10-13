import React from 'react'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return products
}

export default async function Page() {
  const products = await getProducts()

  return (
    <div className="p-6 sm:p-12">
      <h3 className="text-3xl font-bold text-emerald-700 mb-8 text-center mt-8 ">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 duration-75 "
          >
            <a href="#">
              <img className="rounded-t-lg w-full h-64 object-contain p-4" src={product.image} alt={product.title} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {product.title}
                </h5>
              </a>
              <p className="mb-3 text-sm text-gray-700  line-clamp-3">{product.description}</p>
              <a
                href={`/products/${product.id}`} 
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 "
              >
                Show details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

