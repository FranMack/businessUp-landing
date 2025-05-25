import { ClienteIcons, SearchIncon, TargetIcon } from '@/app/utils/icons'
import React from 'react'

export const SolutionCenter = () => {
  return (
      <div className="w-[20vw] h-[20vw] flex justify-center border border-primary rounded-full relative border-dashed" >
               <div className="group w-[8vw] h-[8vw]  border  bg-[#ffff] border-primary rounded-full absolute left-[-2vw] flex items-center  hover:bg-primary transition-all duration-1000">
                 <TargetIcon className="fill-[#693f91] group-hover:fill-[#ffff] transition-colors duration-1000" />
                 <p className="absolute left-[-6vw] text-[1.1rem] font-semibold">
                   Desarrollos
                 </p>
               </div>
              <div className="group w-[8vw] h-[8vw]  border  bg-[#ffff] border-primary rounded-full absolute right-[-2vw] flex items-center  hover:bg-primary transition-all duration-1000">
                 <SearchIncon className="fill-[#693f91] group-hover:fill-[#ffff] transition-colors duration-1000" />
                 <p className="absolute right-[-6vw] text-[1.1rem] font-semibold">
                   Procesos
                 </p>
               </div>
   
               <div className="group w-[8vw] h-[8vw] border bg-[#ffff] border-primary rounded-full absolute  bottom-[-3vw] flex items-center justify-center hover:bg-primary transition-all duration-1000">
                 <ClienteIcons className="fill-[#693f91] group-hover:fill-[#ffff] transition-colors duration-1000" />
                 <p className="absolute bottom-[-2vw] text-[1.1rem] font-semibold">
                   Clientes
                 </p>
               </div>
             </div>
  )
}
