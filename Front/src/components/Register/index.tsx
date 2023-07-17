import Form from "@/components/Form";
import { useForm } from "@/hooks";
import { RegisterSchema, schema } from "./validate";
import FormInput from "@/components/FormInput";
import FormSelectMenu from "@/components/FormSelectMenu";
import { useEffect } from "react";
import { randomKey } from "@/utils";
import { FieldErrors } from "react-hook-form";

const Register = () => {
  const form = useForm<RegisterSchema>({ schema });
  const id = form.watch("userId");
  const password = form.watch("userPwd");
  const cpassword = form.watch("confirmPwd");

  useEffect(() => {
    form.trigger(["userId", "userPwd", "confirmPwd"]);
  }, [password, id, cpassword, form.trigger]);

  const onSubmit = (data: RegisterSchema) => {};
  const onInvalid = (errors: FieldErrors<RegisterSchema>) => {};
  return (
    <Form form={form} onSubmit={onSubmit} onInvalid={onInvalid}>
      <FormInput id="userId" type="text" displayName="ID" />
      <FormInput id="confirmId" type="checkbox" displayName="중복확인" />
      <FormInput id="userPwd" type="password" displayName="Password" />
      <FormInput
        id="confirmPwd"
        type="password"
        displayName="Confirm Password"
      />
      <FormInput id="mento" type="checkbox" displayName="멘토 여부" />
      <FormInput
        id="githubUrlExpose"
        type="checkbox"
        displayName="github 주소 숨김"
      />
      <FormInput id="enrollDate" type="date" displayName="생성 날짜" />
      <FormSelectMenu id="skill" name="Select Skill" key={randomKey()} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Register;
