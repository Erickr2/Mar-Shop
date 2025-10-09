import { Prisma, PrismaClient } from "../generated/prisma";
import { initialData } from "./seed";
const prisma = new PrismaClient();
const productData: Prisma.ProductCreateInput[] = initialData.products.map(
  (product) => ({
    title: product.title,
    description: product.description,
    inStock: product.inStock,
    price: product.price,
    sizes: product.sizes,
    slug: product.slug,
    tags: product.tags,
    gender: product.gender,
    category: {
      connectOrCreate: {
        where: { name: product.type },
        create: { name: product.type },
      },
    },
    ProductImage: { create: product.images.map((image) => ({ url: image })) },
  })
);
export async function main() {
    try {
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();
        
    } catch (error) {
        console.log('Error seed database: ', error);
    }
  for (const u of productData) {
    await prisma.product.create({ data: u });
  }
}
main();
