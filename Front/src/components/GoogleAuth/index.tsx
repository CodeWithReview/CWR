import { googleConfig } from "@/config";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { actions } from "@/features/users";
import { getGoogleInfo } from "@/utils/oauth";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  const dispatch = useAppDispatch();
  const {} = useAppSelector((state) => state.usersReducer);
  return (
    <GoogleOAuthProvider clientId={googleConfig.clientId}>
      <GoogleLogin
        onSuccess={(res) => {
          const tokenData = getGoogleInfo(res);
          if (tokenData) {
            const google_info = {
              name: tokenData?.name,
              image: tokenData?.picture
            };
            dispatch(actions.preLogin(google_info));
          }
        }}
        onError={() => {}}
        useOneTap={true}
        auto_select={true}
      />
      {/* <button className="flex bg-slate-50 rounded-md shadow-button justify-center items-center p-3 hover:bg-slate-100 active:bg-slate-200">
        <GoogleLogo width="24px" height="24px" />
        <span className="pl-3">Continue with Google</span>
      </button> */}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
