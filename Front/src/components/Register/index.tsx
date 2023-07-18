import Form from "@/components/Form";
import { useForm } from "@/hooks";
import { RegisterSchema, schema } from "./validate";
import FormInput from "@/components/FormInput";
import FormSelectMenu from "@/components/FormSelectMenu";
import { useEffect } from "react";
import { randomKey } from "@/utils";
import { useAppDispatch } from "@/features/hooks";
import { actions } from "@/features/users";
import { addUser } from "@/database";

const Register = () => {
  const form = useForm<RegisterSchema>({ schema });
  const id = form.watch("userId");
  const nick = form.watch("nickName");
  const password = form.watch("userPwd");
  const cpassword = form.watch("confirmPwd");

  const dispatch = useAppDispatch();

  // 해당 의존성은 초기에 전송버튼을 누르기 전에 validation이 작동하는데 필요한 것
  useEffect(() => {
    form.trigger(["userId", "userPwd", "confirmPwd", "nickName"]);
  }, [password, id, nick, cpassword, form.trigger]);

  const onSubmit = async (data: RegisterSchema) => {
    const user = { ...data, enrollDate: new Date() };
    dispatch(actions.login({ ...user }));
    await addUser({ ...user });
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormInput id="userId" type="text" displayName="ID" maxLength={10} />
      <FormInput id="confirmId" type="checkbox" displayName="중복확인" />
      <FormInput id="nickName" type="text" displayName="닉네임" maxLength={15} />
      <FormInput id="confirmNickName" type="checkbox" displayName="중복확인" />
      <FormInput id="userPwd" type="password" displayName="Password" maxLength={15} />
      <FormInput id="confirmPwd" type="password" displayName="Confirm Password" maxLength={15} />
      <FormInput id="mento" type="checkbox" displayName="멘토 여부" />
      <FormSelectMenu id="skill" name="skill" key={randomKey()} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default Register;
