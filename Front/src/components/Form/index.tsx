import {
  FormProvider,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
  SubmitErrorHandler,
} from "react-hook-form";
import { ComponentProps } from "react";

interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<"form">, "onSubmit" | "onInvalid"> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
}

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  onInvalid,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} {...props}>
        <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
      </form>
    </FormProvider>
  );
};

export default Form;
