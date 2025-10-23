import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[600px]">
      <IoCartOutline className="mx-5" size={80} />

      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">Tu carrito esta vacío</p>
        <Link
        href="/"
        className="text-blue-500 mt-2 text-4xl"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}