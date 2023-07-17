import { HTMLInput } from "@/@types/custom";
import { ForwardedRef, forwardRef, memo } from "react";

interface InputProps extends HTMLInput {
  id: string;
  displayName: string;
}

const Input = (
  { id, displayName, type, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <label htmlFor={id} className="block">
        <span>{displayName}</span>
      </label>
      <input id={id} type={type} ref={ref} {...props} />
    </>
  );
};

export default memo(forwardRef<HTMLInputElement, InputProps>(Input));
