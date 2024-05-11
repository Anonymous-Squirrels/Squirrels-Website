import React from "react";

function GlassMorphism({
  className,
  children,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  variant: "light" | "dark";
}) {
  let glassCss = "";
  switch (variant) {
    case "dark":
      glassCss = "bg-black bg-opacity-10";
      break;
    default:
      glassCss = "bg-white bg-opacity-10";
  }
  // TODO: Add Backdrop Blur
  return (
    <div className={`p-4 backdrop-blur-xl ${glassCss} ${className}`}>
      {children}
    </div>
  );
}

export default GlassMorphism;
