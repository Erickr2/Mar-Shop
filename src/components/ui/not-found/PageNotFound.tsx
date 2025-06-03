import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[500px] w-full justify-center items-center align-middle">
        
        <div className="text-center px-5 mx-5">
            <h2 className={`${titleFont.className} antialiased text-8xl`}>404</h2>
            <p className="font-semibold text-xl">Whooops! Lo sentimos mucho.</p>
            <p className="font-light">
                <span>Puedes regresar al </span>
                <Link 
                href="/"
                className="font-normal hover:underline transition-all"
                >Inicio</Link>
            </p>
        </div>

        <div className="px-5 mx-5">
            <Image
            width={500}
            height={500}
            className="p-5 sm:p-0"
            alt="starman"
            src="/imgs/starman_750x750.png"
             />

        </div>

    </div>



  )
}
