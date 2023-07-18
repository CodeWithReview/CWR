import { HTMLInput } from "@/@types/custom";
import { ForwardedRef, forwardRef } from "react";

interface InputProps extends HTMLInput {
  id: string;
  displayName: string;
}

const Input = ({ id, displayName, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor={id} className="block">
        <span>{displayName}</span>
      </label>
      <input id={id} ref={ref} {...props} />
    </>
  );
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
