import { GoogleJWTInfo } from "@/@types/custom";
import { githubConfig } from "@/config";
import { CredentialResponse } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export const getGitHubUrl = (from: string) => {
  const rootURl = "https://github.com/login/oauth/authorize";

  const options = {
    client_id: githubConfig.clientId,
    redirect_uri: githubConfig.redirectUrl,
    scope: "read:user",
    state: from
  };

  const qs = new URLSearchParams(options);

  return `${rootURl}?${qs.toString()}`;
};

export const getGoogleInfo = (response: CredentialResponse) => {
  if (response.credential) {
    return jwtDecode(response.credential) as GoogleJWTInfo;
  }
};
