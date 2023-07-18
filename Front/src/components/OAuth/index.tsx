import { OAuthorizeAPI } from "@/@types/custom";
import GoogleAuth from "@/components/GoogleAuth";

const Component = {
  google: GoogleAuth,
  github: () => <></>
};

type OAuthProps = {
  authorize: OAuthorizeAPI;
};

const OAuth = ({ authorize }: OAuthProps) => {
  const OAuthComponent = Component[authorize];
  return <OAuthComponent />;
};

export default OAuth;
