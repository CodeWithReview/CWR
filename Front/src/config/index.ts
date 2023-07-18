const env = import.meta.env;

export const googleConfig = {
  clientId: env.VITE_GOOGLE_CLIENT_ID,
  redirectUrl: env.VITE_GOOGLE_CLIENT_REDIRECT_URI
};

export const githubConfig = {
  clientId: env.VITE_GITHUB_CLIENT_ID,
  redirectUrl: env.VITE_GITHUB_CLIENT_REDIRECT_URI
};
