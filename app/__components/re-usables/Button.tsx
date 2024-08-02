import { iButton } from "@/public/utils/interfaces";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<iButton> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "rounded-md text-white font-semibold text-[14px] hover:bg-blue-500 bg-blue-700 uppercase duration-300 px-3 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
