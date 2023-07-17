import { RegisterValues } from "@/@types/custom";
import { idRegex, passwordRegex } from "@/utils";
import { z } from "zod";

const id = z
  .string()
  .min(1, { message: "아이디를 입력해주세요." })
  .regex(idRegex, "특수문자를 제외한 문자를 입력해주세요.");

const pw = z
  .string()
  .min(1, { message: "비밀번호를 입력해주세요." })
  .regex(passwordRegex, "비밀번호 규칙을 지켜주세요.");

const strNullable = z.string().optional().nullable();

export const pwSchema = z.object({
  userPwd: pw,
  confirmPwd: pw,
});

export const otherSchema = z.object({
  userId: id,
  confirmId: z.boolean(),
  skill: z.string().array().optional().nullable(),
  profileImg: strNullable,
  userInfo: strNullable,
  githubUrl: strNullable,
  githubUrlExpose: z.boolean(),
  mento: z.boolean(),
  enrollDate: z.coerce.date(),
});

export const refinePWSchema = pwSchema.superRefine(async (data, ctx) => {
  if (data.confirmPwd !== data.userPwd) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "비밀번호가 일치하지 않습니다.",
      path: ["confirmPwd"],
    });
  }
});

export const schema = z.intersection(
  otherSchema,
  refinePWSchema
) satisfies z.ZodType<RegisterValues>;

export type RegisterSchema = z.infer<typeof schema>;
