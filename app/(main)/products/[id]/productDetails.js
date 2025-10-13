"use client";

import Image from "next/image";

export default function ProductDetails({ product }) {
  if (!product) {
    return <div className="p-8 text-center">No product data.</div>;
  }

  return (
    <div className="p-6 sm:p-12 mt-20 h-screen">
       <div
        key={product.id}
        className="w-full max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden"
      >
        <div className="md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full h-80 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
  <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 50vw"
          style={{ objectFit: "contain" }}
        />
        </div>
        
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h5>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
}


