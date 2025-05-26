"use client";
import { ClienteIcons, SearchIncon, TargetIcon } from "@/app/utils/icons";
import { useContext } from "react";
import { SolutionsContext } from "../Solutions";

export const SolutionCenter = () => {
  const context = useContext(SolutionsContext);

  const { focus, handleFocus } = context;
  return (
    <div className="w-[20vw] h-[20vw] mt-[3vh] flex justify-center border border-primary rounded-full relative border-dashed">
      <div
        onMouseEnter={() => {
          handleFocus("desarrollos");
        }}
     
        className={`group w-[8vw] h-[8vw]   ${
          focus === "desarrollos" ? "bg-primary" : "bg-[#ffff]"
        } transition-colors duration-1000"  border border-primary rounded-full absolute left-[-2vw] flex items-center`}
      >
        <TargetIcon
          className={`${
            focus === "desarrollos" ? "fill-[#ffff]" : "fill-[#693f91"
          } transition-colors duration-1000 `}
        />
        <p className="absolute left-[-6vw] text-[1.1rem] font-semibold">
          Desarrollos
        </p>
      </div>
      <div
        onMouseEnter={() => {
          handleFocus("procesos");
        }}
      
        className={`group w-[8vw] h-[8vw] ${
          focus === "procesos" ? "bg-primary" : "bg-[#ffff]"
        } transition-colors duration-1000 border  border-primary rounded-full absolute right-[-2vw] flex items-center `}
      >
        <SearchIncon
          className={`${
            focus === "procesos" ? "fill-[#ffff]" : "fill-[#693f91]"
          } transition-colors duration-1000`}
        />
        <p className="absolute right-[-6vw] text-[1.1rem] font-semibold">
          Procesos
        </p>
      </div>

      <div
        onMouseEnter={() => {
          handleFocus("clientes");
        }}
     
        className={`group w-[8vw] h-[8vw] ${
          focus === "clientes" ? "bg-primary" : "bg-[#ffff]"
        } transition-colors duration-1000 border bg-[#ffff] border-primary rounded-full absolute  bottom-[-3vw] flex items-center justify-center`}
      >
        <ClienteIcons
           className={`${
            focus === "clientes" ? "fill-[#ffff]" : "fill-[#693f91]"
          } transition-colors duration-1000`}
        />
        <p className="absolute bottom-[-2vw] text-[1.1rem] font-semibold">
          Clientes
        </p>
      </div>
    </div>
  );
};
