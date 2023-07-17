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
      render={({ field: { value, onChange, ref, ...restField } }) => (
        <SelectMenu
          id={id}
          clear={true}
          options={skill}
          value={value ? skill.find((x) => x.value === value) : value}
          onChange={(x: any) => onChange(x ? x.value : x)}
          defaultValue={{ value: "Javascript", label: "Javascript" }}
          position="center"
          inputRef={ref}
          {...restField}
        />
      )}
    ></Controller>
  );
};

export default FormSelectMenu;
