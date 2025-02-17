import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    id: string;
    name: string;
}





export default function input({ ...rest }: IProps) {
  return (
    
      <input className="border-[0.5px] shadow-md border-gray-300 p-2 rounded-md"  {...rest}/>
   
  );
}