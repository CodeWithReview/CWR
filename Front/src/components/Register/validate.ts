import { RegisterValues } from "@/@types/custom";
import { idRegex, passwordRegex } from "@/utils";
import { z } from "zod";

export const schema = z
  .object({
    userId: z
      .string()
      .min(1, { message: "아이디를 입력해주세요." })
      .regex(idRegex, "특수문자를 제외한 문자를 입력해주세요."),
    confirmId: z.boolean(),
    userPwd: z
      .string()
      .min(1, { message: "비밀번호를 입력해주세요." })
      .regex(passwordRegex, "비밀번호 규칙을 지켜주세요."),
    confirmPwd: z.string().min(1, { message: "비밀번호를 입력해주세요." }),
    profileImg: z.string().nullable(),
    userInfo: z.string().nullable(),
    githubUrl: z.string().nullable(),
    githubUrlExpose: z.boolean(),
    mento: z.boolean(),
    enrollDate: z.coerce.date(),
  })
  .refine((data) => data.userPwd === data.confirmPwd, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPwd"],
  }) satisfies z.ZodType<RegisterValues>;

export type RegisterSchema = z.infer<typeof schema>;
