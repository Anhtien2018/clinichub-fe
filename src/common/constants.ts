export const paths = {
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
  },
  dashboard: {
    dashboard: "/dashboard",
    products: {
      index: "/dashboard/products",
    },
    users: {
      index: "/dashboard/users",
    },
  },
} as const;

export const METHODS = [
  {
    id: "jwt",
    label: "Jwt",
    // path: paths.auth.jwt.login,
    icon: "/assets/icons/auth/ic_jwt.svg",
  },
  {
    id: "firebase",
    label: "Firebase",
    // path: paths.auth.firebase.login,
    icon: "/assets/icons/auth/ic_firebase.svg",
  },
  {
    id: "amplify",
    label: "Amplify",
    // path: paths.auth.amplify.login,
    icon: "/assets/icons/auth/ic_amplify.svg",
  },
  {
    id: "auth0",
    label: "Auth0",
    // path: paths.auth.auth0.login,
    icon: "/assets/icons/auth/ic_auth0.svg",
  },
];

export const TOKEN_KEY = "token_key";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const NoImage = "/assets/images/noImage/no_image.svg";
export const OpacityHover = 0.8;
