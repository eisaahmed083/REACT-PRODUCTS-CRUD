import { ReactNode } from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ButtonColor?: string;
  ButtonColorHover?: string;
}

export default function Button({
  children,
  ButtonColor,
  ButtonColorHover,
  ...rest
}: Iprops) {
  return (
    <button
      {...rest}
      className={`bg-${ButtonColor}-600 flex-1 p-2 rounded
    text-white hover:bg-${ButtonColorHover}-400 cursor-pointer`}
    >
      {children}
    </button>
  );
}