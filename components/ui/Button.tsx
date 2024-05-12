import React from "react";

function Button({
  className,
  children,
  variant,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
}) {
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = "bg-sq-violet text-white";
      break;
    case "secondary":
      btnStyle = "bg-transparent border border-sq-violet text-sq-violet";
      break;
  }
  return (
    <button onClick={onClick} className={`${btnStyle} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
