export const revalidate = 10080;

import { GetproductBySlug } from "@/actions";
import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { StockLable } from "@/components/product";
import { titleFont } from "@/config/fonts";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const product = await GetproductBySlug(slug);

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description ?? '',
      images: [`/products/${product?.images[1]}`]
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const product = await GetproductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* slideShow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile slideShow */}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block sm:hidden"
        />

        {/* Desktop slideShow */}
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden sm:block"
        />
      </div>

      {/* Detalle */}
      <div className="col-span-1 px-5">
        <StockLable slug={product.slug} />

        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5 ">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={2} />

        {/* boton */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* desc */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
