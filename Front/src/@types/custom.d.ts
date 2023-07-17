export type UserStatus = "default" | "disabled" | "prevent";

export type RegisterValues = {
  userId: string;
  userPwd: string;
  confirmId: boolean;
  confirmPwd: string;
  skill?: string[] | null;
  profileImg?: string | null;
  userInfo?: string | null;
  githubUrl?: string | null;
  githubUrlExpose: boolean;
  mento: boolean;
  enrollDate: Date;
};

export type HTMLInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
