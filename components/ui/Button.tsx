import React from "react";

function Button({
  className,
  children,
  variant,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  onClick?: () => void;
}) {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = "bg-sq-violet text-white";
      break;
    case "secondary":
      btnStyle =
        "bg-transparent border-2 border-sq-violet text-sq-violet hover:bg-sq-violet hover:border-white";
      break;
    case "light":
      btnStyle = "bg-black text-white";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 p-4 rounded-full ${btnStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
