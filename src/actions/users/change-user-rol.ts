'use server';
import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

 


export const changeUserRol = async(userId: string, role: string) => {

    const session = await auth();

    if(session?.user.rol !== 'admin'){
        return {
            ok: false,
            message: 'Must be authenticated as an admin'
        }
    }

    try {

        const newRole = role === 'admin' ? 'admin': 'user';

        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                rol: newRole
            }
        })

        revalidatePath('/admin/users')

        return {
            ok: true,
            rol: user.rol
        }
        
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'Role cant be updated, review the logs'
        }
    }
  



}
