import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productINCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]


export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0 ">

      <div className="flex flex-col w-[1000px]">
        <Title title="Confirm order" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}

          <div className="flex flex-col mt-5">
            <span className="text-xl">Edit items</span>
            <Link href="/cart" className="underline mb-5">
              Edit
            </Link>

            {/* items */}
            {productINCart.map(item => (
              <div key={item.slug} className="flex mb-5">
                <Image
                  src={`/products/${item.images[0]}`}
                  width={100}
                  height={100}
                  alt={item.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{item.title}</p>
                  <p>${item.price} x 3</p>
                  <p className="font-bold">Subtotal: ${item.price * 3}</p>
                </div>

              </div>
            ))}



          </div>


          {/* checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Delivery address</h2>
            <div className="mb-10">
              <p className="text-xl">Eric Uriel</p>
              <p className="font-bold">Av. Siempre viva 123</p>
              <p className="font-bold">Col. Centro</p>
              <p className="font-bold">Alcaldia. Cuahtemoc</p>
              <p className="font-bold">CDMX</p>
              <p>CP 123123</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"  />

            <h2 className="text-2xl mb-2">Resume order</h2>
            <div className="grid grid-cols-2 gap-2 ">
              <span>No. Prodcuts</span>
              <span className="text-right">3 Articles</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>IVA (16%)</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5">Total: </span>
              <span className="mt-5 text-2xl text-right">$ 100</span>


            </div>

            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                <span className="text-xs">
                  Al hacer clic en "Confirm order", acepta nuestros <a href="#" className="underline">Términos y condiciones y <a href="#" className="underline"> politica de privacidad</a> </a>
                </span>
              </p>


              <Link 
              className="flex btn-primary justify-center "
              href="/orders/123 ">
              Confirm order
              </Link>
            </div>

          </div>




        </div>

      </div>

    </div>
  );
}