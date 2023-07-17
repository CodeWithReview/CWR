import Form from "@/components/Form";
import { useForm } from "@/hooks";
import { RegisterSchema, schema } from "./validate";
import FormInput from "@/components/FormInput";
import { useEffect } from "react";

const Register = () => {
  const form = useForm<RegisterSchema>({ schema });
  const id = form.watch("userId");
  const password = form.watch("userPwd");
  const cpassword = form.watch("confirmPwd");

  useEffect(() => {
    form.trigger(["userId", "userPwd", "confirmPwd"]);
  }, [password, id, cpassword, form.trigger]);

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Form<RegisterSchema> form={form} onSubmit={onSubmit}>
      <FormInput id="userId" type="text" displayName="ID" />
      <FormInput id="userPwd" type="password" displayName="Password" />
      <FormInput
        id="confirmPwd"
        type="password"
        displayName="Confirm Password"
      />
      <FormInput id="mento" type="password" displayName="Confirm Password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Register;
