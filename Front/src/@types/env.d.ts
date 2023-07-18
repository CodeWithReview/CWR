interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_CLIENT_REDIRECT_URI: string;
  readonly VITE_GITHUB_CLIENT_REDIRECT_URI: string;
  readonly VITE_GITHUB_CLIENT_ID: string;
  readonly VITE_GITHUB_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
