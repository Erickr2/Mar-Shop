import { Title } from "@/components";
import Link from "next/link";
import { DetailProductsInCart } from "./ui/detailProductsInCart";
import { PlaceOrder } from "./ui/placeOrder";


export default function CheckOutPage() {
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
           
           <DetailProductsInCart />

          </div>

          {/* checkout */}

          <PlaceOrder />

        </div>

      </div>

    </div>
  );
}