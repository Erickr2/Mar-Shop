"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { PlaceToOrder } from "@/actions";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";

export const PlaceOrder = () => {

    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isPlancingOrder, setIsPlancingOrder] = useState(false);

  const address = useAddressStore((state) => state.address);
  const { getSummaryInformation, cart, clearCart } = useCartStore();
  const { itemsInCart, subTotal, tax, total } = getSummaryInformation();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onPlaceOrder = async() => {
    setIsPlancingOrder(true);

    const productsToOrder = cart.map( product => ({
        productId: product.id,
        quantity: product.quantity,
        size: product.size
    }) )


    const resp = await PlaceToOrder(productsToOrder, address);

    if( !resp.ok ) {
        setIsPlancingOrder(false);
        setErrorMessage(resp.message);
        return;
    }

    clearCart();
    router.replace('/orders/' + resp.order?.id);

  }

  if (!loaded) {
    return <p>Loading....</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-5">
      <h2 className="text-2xl mb-2">Delivery address</h2>
      <div className="mb-10">
        <p className="text-xl">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.secondAddress}</p>
        <p>{address.postalCode}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>{address.phone}</p>
      </div>

      <div className="w-full h-0.5 rounded bg-gray-200 mb-7" />

      <h2 className="text-2xl mb-2">Resume order</h2>
      <div className="grid grid-cols-2 gap-2 ">
        <span>No. Prodcuts</span>
        <span className="text-right">{`${
          itemsInCart === 1 ? "1 Article" : `${itemsInCart} Articles`
        }`}</span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span>IVA (16%)</span>
        <span className="text-right">{currencyFormat(tax)}</span>

        <span className="text-2xl mt-5">Total: </span>
        <span className="mt-5 text-2xl text-right">
          {currencyFormat(total)}
        </span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          <span className="text-xs">
            Al hacer clic en &quot;Confirm order&quot;, aceptas nuestros{" "}
            <Link href="/terminos" className="underline">
              Términos y condiciones
            </Link>{" "}
            y{" "}
            <Link href="/privacidad" className="underline">
              política de privacidad
            </Link>
          </span>
        </p>

        <p className="text-red-500 py-2">{ errorMessage }</p>

        <button
          //   href="/orders/123 "
          onClick={ onPlaceOrder }
          className={clsx({
            'btn-primary': !isPlancingOrder,
            'btn-disabled': isPlancingOrder
          })}
        >
          Confirm order
        </button>
      </div>
    </div>
  );
};
