import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  useForm as useHookForm,
  UseFormProps as UseHookFormProps
} from "react-hook-form";
import { TypeOf, ZodSchema } from "zod";

interface UseFormProps<T extends ZodSchema>
  extends UseHookFormProps<TypeOf<T>> {
  schema: T;
}

export const useForm = <T extends FieldValues>({
  schema,
  ...formConfig
}: UseFormProps<ZodSchema<T>>) => {
  return useHookForm<T>({
    ...formConfig,
    resolver: zodResolver(schema)
  });
};
