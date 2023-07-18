import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "@/components/Input";
import { HTMLInput } from "@/@types/custom";

interface FormInputProps extends Omit<HTMLInput, "ref" | "onChange"> {
  id: string;
  displayName: string;
}

const FormInput = ({ id, displayName, ...props }: FormInputProps) => {
  const {
    formState: { errors },
    register
  } = useFormContext();
  return (
    <div>
      <Input {...register(id)} id={id} displayName={displayName} {...props} />
      <ErrorMessage
        errors={errors || {}}
        name={id}
        render={({ message }) => <p className="text-error mt-1 text-xs">{message}</p>}
      />
    </div>
  );
};

export default FormInput;
