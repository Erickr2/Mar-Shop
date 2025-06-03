'use client';

import { SeedProduct } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
    product: SeedProduct
}

export const ProductGridItme = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]); 


    return (
        <div className="rounded-md overflow-hidden fade-in"> {/* overflow-hidden: corta la img que salga del div  */}
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="w-full object-cover transition-all rounded" /* object-cover: se expanda propiamente en el espacio que tiene  */
                    width={450}
                    height={450}
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>



            <div className="p-4 flex flex-col">
                <Link
                className="hover:text-blue-600" 
                href={`/product/${product.slug}`}>
                    {product.title}
                </Link>
                <span className="font-bold">${product.price}</span>
            </div>


        </div>
    )
}
