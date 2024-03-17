"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
    w-full
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    ${outline ? "bg-white" : "bg-rose-500"}
    ${outline ? "border-black" : "border-rose-500"}
    ${outline ? "text-black" : "text-white"}
    ${small ? "py-1" : "py-3"}
    ${small ? "text-sm" : "text-md"}
    ${small ? "font-light" : "font-semibold"}
    ${small ? "border-[1px]" : "border-2"}
  `}
    >
      {label}
      {Icon && <Icon size={24} className="absolute left-6 top-3" />}
    </button>
  );
};

export default Button;
