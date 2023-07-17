import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
} from "react-hook-form";
import { ZodSchema } from "zod";

interface UseFormProps<T> extends UseHookFormProps {
  schema: T;
}

export const useForm = <T extends FieldValues>({
  schema,
}: UseFormProps<ZodSchema<T>>) => {
  return useHookForm<T>({
    resolver: zodResolver<ZodSchema<T>>(schema),
  });
};
