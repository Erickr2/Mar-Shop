"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const updatedProductCart = useCartStore((state) => state.updatedProductCart);
  const removeProductCart = useCartStore((state) => state.removeProductCart);
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
            <Link 
            className="hover:underline cursor-pointer"
            href={`/product/${item.slug}`}>
            {item.title}
            </Link>
            <p>${item.price}</p>
            <p> <strong>Size:</strong> {item.size}</p>
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChanged={(value) => updatedProductCart(item,value)}
            />
            <button 
            className="underline mt-3"
            onClick={() => removeProductCart(item)}
            >Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
