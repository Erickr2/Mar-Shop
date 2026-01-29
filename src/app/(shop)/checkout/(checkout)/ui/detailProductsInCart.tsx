"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const DetailProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])
  

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productsInCart.map((item) => (
        <div key={`${item.slug}-${item.size}`} className="flex mb-5">
          <Image
            src={`/products/${item.image}`}
            width={100}
            height={100}
            alt={item.title}
            className="mr-5 rounded"
          />

          <div>
            <span>
             {item.title} ({item.quantity})
            </span>
            <p> <strong>Size:</strong> {item.size}</p>
            <p className="font-bold">{currencyFormat(item.price * item.quantity)}</p>
          

          </div>
        </div>
      ))}
    </>
  );
};
