import { HTMLInputTypeAttribute, memo } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "@/components/Input";

interface FormInputProps {
  id: string;
  displayName: string;
  type?: HTMLInputTypeAttribute;
}

const FormInput = ({ id, displayName, type }: FormInputProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <div>
      <Input {...register(id)} id={id} displayName={displayName} type={type} />
      <ErrorMessage
        errors={errors || {}}
        name={id}
        render={({ message }) => (
          <p className="text-error mt-1 text-xs">{message}</p>
        )}
      />
    </div>
  );
};

export default memo(FormInput);
