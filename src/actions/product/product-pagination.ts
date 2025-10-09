'use server';

import { PrismaClient } from "@/generated/prisma";


export const getPaginatedProductsWithImages = async() => {

    const prisma = new PrismaClient();
    
    try {
        
        const products = await prisma.product.findMany({
            take: 12,
            include : {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })

        return {
            products: products.map( product => ({
                currentPage: 1,
                totalPages: 10,
                ...product,
                images: product.ProductImage.map( img => img.url)
            }))
        }

    } catch (error) {
        throw new Error('No se cargaron los productos')
    }
}