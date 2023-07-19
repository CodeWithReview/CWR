import { UserDefault } from "@/@types/custom";
import { passwordRegex } from "@/utils";
import { z } from "zod";

export const schema = z.object({
  userId: z.string().min(1, { message: "아이디를 입력해주세요." }),
  userPwd: z
    .string()
    .min(1, { message: "비밀번호를 입력해주세요." })
    .regex(passwordRegex, { message: "비밀번호 규칙을 지켜주세요." }),
  autoLogin: z.boolean()
}) satisfies z.ZodType<UserDefault>;

export type LoginSchema = z.infer<typeof schema>;
