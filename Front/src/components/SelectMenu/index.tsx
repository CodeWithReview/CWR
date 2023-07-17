import { memo } from "react";
import { RefCallBack } from "react-hook-form";
import Select from "react-select";

type ValueWithLabel = {
  value: string;
  label: string;
};

type SelectMenuProps = {
  defaultValue: ValueWithLabel;
  id: string;
  value?: any;
  position: "right" | "center" | "left";
  options: any;
  multi?: boolean;
  clear?: boolean;
  inputRef?: RefCallBack;
  onChange?: (args: any) => void;
};

const SelectMenu = ({
  defaultValue,
  id,
  value,
  position,
  options,
  multi = false,
  clear = true,
  inputRef,
  onChange,
  ...props
}: SelectMenuProps) => {
  return (
    <Select
      id={id}
      value={value}
      defaultValue={defaultValue}
      isMulti={multi}
      isClearable={clear}
      options={options}
      onChange={onChange}
      ref={inputRef}
      {...props}
    />
  );
};
export default memo(SelectMenu);
