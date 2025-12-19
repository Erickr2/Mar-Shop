'use server';

import { prisma } from "@/lib/prisma";

export const deleteUserAddress = async( userId: string) => {

    try {

        const deleted = await prisma.userAddress.delete({
            where: { userId }
        });

        return {
            ok: true,
            message: 'address delete completed'
        }
        
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'address cant be deleted'
        }
    }
}