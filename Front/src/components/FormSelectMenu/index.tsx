import { Controller, useFormContext } from "react-hook-form";
import { skill } from "./data";
import SelectMenu from "@/components/SelectMenu";

type FormSelectMenuProps = {
  name: string;
  id: string;
};

const FormSelectMenu = ({ name, id }: FormSelectMenuProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref, ...restField } }) => {
        return (
          <SelectMenu
            id={id}
            isMulti={true}
            isClearable={true}
            options={skill}
            value={skill.find((c) => c.value === value)}
            onChange={(e: any) =>
              e.value ? onChange(e.value) : onChange(e.map((c: any) => c.value))
            }
            position="center"
            inputRef={ref}
            {...restField}
          />
        );
      }}
    ></Controller>
  );
};

export default FormSelectMenu;
