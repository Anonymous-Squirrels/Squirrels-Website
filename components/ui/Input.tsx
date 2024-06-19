"use client";
import React, { ForwardedRef } from "react";

interface InputProps {
  className?: string;
  classNameDiv?: string;
  classNameInput?: string;
  classNameText?: string;
  type: string;
  placeholder: string;
  text?: string;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({
  className,
  classNameDiv,
  classNameInput,
  classNameText,
  type,
  placeholder,
  text,
  ...rest
}, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {

  return (
    <div className={className}>
      {text && <div className={`${classNameText}`}>{text}</div>}
      <div className={`overflow-hidden ${classNameDiv}`}>
        {type !== "textarea" ? (
          <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            className={`p-1.5 md:p-4 bg-transparent outline-none border-none w-full ${classNameInput}`}
            {...rest}
          />
        ) : (
          <textarea
            placeholder={placeholder}
            rows={5}
            ref={ref}
            className={`resize-none p-4 bg-transparent outline-none border-none w-full ${classNameInput}`}
            {...rest}
          ></textarea>
        )}
      </div>
    </div>
  );
});
Input.displayName = "Input";

export default Input;
