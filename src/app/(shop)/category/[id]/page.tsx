import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  }
}


export default function ({ params }: Props) {

  const { id } = params;
  const products = initialData.products;
  const filterData = products.filter((item) => item.gender === id);

  const labels: Record<Category, string> = {
    'men':'Men´s',
    'women':'Women´s',
    'kid':'Kid´s',
    'unisex': 'For all'
  }

  return (
    <>
      <Title
        title={`${labels[id]} - Product`}
        className="mb-2"
      />

      <ProductGrid products={filterData} />

    </>
  );
}