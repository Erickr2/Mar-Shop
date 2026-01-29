import { Prisma, PrismaClient } from "../generated/prisma";
import { initialData } from "./seed";
import {paises} from './seed-countries'
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

const { users } = initialData;

export async function main() {
  try {

    await prisma.orderAddress.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();

    await prisma.userAddress.deleteMany();
    await prisma.user.deleteMany();
    await prisma.country.deleteMany();

    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

  } catch (error) {
    console.log("Error seed database: ", error);
  }

  await prisma.user.createMany({
    data: users
  })

  for (const u of productData) {
    await prisma.product.create({ data: u });
  }

  for (const c of paises) {
    await prisma.country.create({data: c})
  }
}
main();
