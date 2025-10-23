import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@/generated/prisma";
import { redirect } from "next/navigation";

interface GenderPageProps {
  params: Promise<{ gender: string }>;
  searchParams?: Promise<{ page?: string }>;
}

export default async function GenderPage({ params, searchParams }: GenderPageProps) {

  const { gender } = await params;
  const sp = await searchParams;
  const page = parseInt(sp?.page ?? "1");


  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (products.length === 0) redirect(`/gender/${gender}`);

  const labels: Record<string, string> = {
    men: "Men´s",
    women: "Women´s",
    kid: "Kid´s",
    unisex: "For all",
  };

  return (
    <>
      <Title title={`${labels[gender]} - Product`} className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
