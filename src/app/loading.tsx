import Image from "next/image";


export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white">
      <div className="animate-spin mb-4">
        <Image src="/favicon.png" alt="Logo BusinessUp" width={100} height={100} />
      </div>
      <span className="text-xl text-primary font-semibold animate-pulse">Cargando...</span>
    </div>
  );
}