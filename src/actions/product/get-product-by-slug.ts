
import { PrismaClient } from "@/generated/prisma";

export const GetproductBySlug = async( slug: string ) => {

    const prisma = new PrismaClient();

    try {

        const product = await prisma.product.findFirst({
            include: {
                ProductImage: true
            },
            where: {
                slug: slug
            }
        })

        if( !product ) return null;

        return {
            ...product,
            images: product.ProductImage.map( ( image ) => image.url )
        }
        
    } catch (error) {
        console.log(error);
        throw new Error('Error to get product by slug');
    }
  
}
