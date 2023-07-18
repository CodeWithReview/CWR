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
  const nick = form.watch("nickName");
  const password = form.watch("userPwd");
  const cpassword = form.watch("confirmPwd");

  // 해당 의존성은 초기에 전송버튼을 누르지 않아도 validation이 작동하는데
  // 필요한 것
  useEffect(() => {
    form.trigger(["userId", "userPwd", "confirmPwd", "nickName"]);
  }, [password, id, nick, cpassword, form.trigger]);

  const onSubmit = (data: RegisterSchema) => {};
  const onInvalid = (errors: FieldErrors<RegisterSchema>) => {};
  return (
    <Form form={form} onSubmit={onSubmit} onInvalid={onInvalid}>
      <FormInput id="userId" type="text" displayName="ID" />
      <FormInput id="confirmId" type="checkbox" displayName="중복확인" />
      <FormInput id="nickName" type="text" displayName="닉네임" />
      <FormInput id="nickNameConfirm" type="checkbox" displayName="중복확인" />
      <FormInput id="userPwd" type="password" displayName="Password" />
      <FormInput id="confirmPwd" type="password" displayName="Confirm Password" />
      <FormInput id="mento" type="checkbox" displayName="멘토 여부" />
      <FormInput id="enrollDate" type="date" displayName="생성 날짜" />
      <FormSelectMenu id="skill" name="Select Skill" key={randomKey()} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Register;
