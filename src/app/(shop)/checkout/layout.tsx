import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function CheckoutLayout({children}: { 
    children: ReactNode
}) {

    const session = await auth();

    if(!session?.user) {
        redirect('/auth/login?redirectTo=/checkout/adress')
    }

    return (
        <>
        {children}
        </>
    )
}