
type align= 'center' |'start'|'end'
interface Props {
  title1: string;
  title2: string;
  align:align;
  color?:string
  
}

export const Title = ({ title1, title2,align="center",color="text-[#e6e6e6]" }: Props) => {
  return (
    <div className={`relative flex justify-${align} items-end w-full h-[9rem] mb-[1rem]`}>
      <h2 className=" z-10 text-[2.5rem] absolute text-primary font-semibold bottom-[-1.5rem]">
        {title1}
      </h2>
      <h3 className={`text-[8rem] absolute ${color} font-semibold leading-none`}>
        {title2}
      </h3>
    </div>
  );
};
