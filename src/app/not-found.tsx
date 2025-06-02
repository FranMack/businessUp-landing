import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <Image
        src="/favicon.png"
        alt="Logo BusinessUp"
        width={200}
        height={200}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-primary mb-2">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-500 mb-6">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link href="/">
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-purple-800 transition duration-300">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
