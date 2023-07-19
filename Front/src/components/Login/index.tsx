import Form from "@/components/Form";
import { useForm } from "@/hooks";
import { LoginSchema, schema } from "./validate";
import FormInput from "@/components/FormInput";
import { useAppDispatch } from "@/features/hooks";
import { actions } from "@/features/users";
import { getUser } from "@/database";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const form = useForm({ schema });
  const id = form.watch("userId");
  const pwd = form.watch("userPwd");

  useEffect(() => {
    form.trigger(["userId", "userPwd"]);
  }, [id, pwd]);

  const onSubmit = async (data: LoginSchema) => {
    const user = await getUser(data.userId);
    if (user) {
      dispatch(actions.login({ ...user, autoLogin: data.autoLogin }));
    }
  };
  return (
    <Form form={form} onSubmit={onSubmit}>
      <FormInput id="userId" displayName="ID" />
      <FormInput id="userPwd" displayName="Password" type="password" />
      <FormInput id="autoLogin" displayName="자동로그인" type="checkbox" />
      <button type="submit">로그인</button>
    </Form>
  );
};

export default Login;
