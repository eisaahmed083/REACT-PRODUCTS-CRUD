import { ReactNode } from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ButtonColor?: string;
  ButtonColorHover?: string;
}

export default function Button({
  children,
  ButtonColor,

  ...rest
}: Iprops) {
  return (
    <button
      {...rest}
      className={`${ButtonColor} flex-1 p-2 rounded
    text-white hover:p-2.5 cursor-pointer`}
    >
      {children}
    </button>
  );
}