import { IDBPDatabase, DBSchema } from "idb";
export type UserStatus = "default" | "disabled" | "prevent";

export type UserData = {
  userId: string;
  userPwd: string;
  nickName: string;
  skill?: string[] | null;
  profileImg?: string | null;
  userInfo?: string | null;
  mento: boolean;
  enrollDate: Date;
};

export type RegisterData = UserData & {
  confirmId: boolean;
  confirmPwd: string;
};

export type GoogleAccount = {
  name: string;
  image: string;
};

export type IndexSchema = {
  google: GoogleAccount;
};

export interface UserSchema extends DBSchema {
  users: {
    key: string;
    value: UserData;
    indexes: IndexSchema;
  };
}

export type IDBUserSchema = IDBPDatabase<UserSchema>;

export interface GoogleJWTInfo {
  /** ID 토큰의 대상 애플리케이션에 대한 고유 식별자 */
  aud: string;
  /** ID 토큰을 사용하여 액세스 요청을 수행하는 애플리케이션에 대한 고유 식별자 */
  azp: string;
  /** 이메일 주소*/
  email: string;
  /** 이메일 검증이 되었는지 확인 */
  email_verified: boolean;
  /** ID 토큰 만료기간 */
  exp: number;
  /** 사용자의 last-name */
  family_name: string;
  /** 사용자의 first-name */
  given_name: string;
  /** ID 토큰 발급 시간 */
  iat: number;
  /** ID 토큰을 발급한 발급자의 URL 구글인 경우 accounts.google.com */
  iss: string;
  /** ID 토큰의 고유 식별자, 일회용 토큰을 처리하는데 사용 */
  jti: string;
  /** 사용자의 전체 이름 */
  name: string;
  /** ID 토큰이 사용되기전, 기다려야하는 시간 */
  nbf: number;
  /** 사용자의 프로필 url */
  picture: string;
  /** 사용자의 고유 식별자, 사용자가 어플리케이션에 로그인할때마다 동일하게 유지 */
  sub: string;
}

export type HTMLInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type OAuthorizeAPI = "google" | "github";