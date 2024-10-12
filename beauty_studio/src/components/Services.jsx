import aboutpics from "/aboutpics.jpg";
//import aboutpics1 from "/aboutpics1.jpg";
//import aboutpics2 from "/aboutpics2.jpg";
import { service } from "../utils/service";
import { useState } from "react";

export default function Services() {
  const [products, setProducts] = useState(service);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold text-center tracking-tight text-gray-900">
        Our Services
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative border border-black rounded-lg p-4"
          >
            <div className="w-full overflow-hidden rounded-lg lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt="image"
                src={product.image}
                className="w-full h-auto object-cover max-h-48"
              />

              <div className="mt-4 text-center">
                <h3 className="text-md text-gray-900 font-midium">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-gray-700">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
