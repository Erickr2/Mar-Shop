"use client";

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLable = ({ slug }: Props) => {
  const [stock, setStock] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1
          className={` ${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1
          className={` ${titleFont.className} ${
            stock! > 1 ? "text-green-600" : "text-red-600"
          } antialiased font-bold text-lg`}
        >
          {stock! > 1 ? "Available" : "Not available"}
        </h1>
      )}
    </>
  );
};
