import { memo } from "react";
import { RefCallBack } from "react-hook-form";
import Select from "react-select";

type ValueWithLabel = {
  value: string;
  label: string;
};

type SelectMenuProps = {
  defaultValue?: ValueWithLabel;
  id: string;
  value?: any;
  position: "right" | "center" | "left";
  options: any;
  isMulti: boolean;
  isClearable: boolean;
  inputRef?: RefCallBack;
  onChange?: (args: any) => void;
};

const SelectMenu = ({
  defaultValue,
  id,
  value,
  position,
  options,
  isMulti,
  isClearable,
  inputRef,
  onChange,
  ...props
}: SelectMenuProps) => {
  return (
    <Select
      id={id}
      value={value}
      defaultValue={defaultValue}
      isMulti={isMulti}
      isClearable={isClearable}
      options={options}
      onChange={onChange}
      ref={inputRef}
      {...props}
    />
  );
};
export default memo(SelectMenu);
