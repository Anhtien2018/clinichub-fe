import { Option } from "@/types/interface";

export const paths = {
  auth: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
  },
  dashboard: {
    dashboard: "/dashboard",
    drug: {
      index: "/dashboard/drug",
    },
    patients: {
      index: "/dashboard/patients",
      detail: (id: string) => "/dashboard/patients/" + id,
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
export const avatarDefault = "/assets/images/avatar/avatarDefault.webp";
export const coverProfile = "/assets/images/cover/cover-4.webp";
export const MaxSizePage = 25;

export const genderOptions = [
  { label: "Nữ", value: "FEMALE" },
  { label: "Nam", value: "MALE" },
  { label: "Khác", value: "OTHER" },
  { label: "Không xác định", value: "UNSPECIFIED" },
] as Option[];

export const listStatus = [
  { value: "active", label: "Active" },
  { value: "pending", label: "Pending" },
  { value: "banned", label: "Banned" },
  { value: "rejected", label: "Rejected" },
];
export const TABS = [
  {
    value: "profile",
    label: "Thông tin",
    // icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: "followers",
    label: "Phiếu thuốc",
    // icon: <Iconify icon="solar:heart-bold" width={24} />,
  },
  {
    value: "friends",
    label: "Lịch sử khám",
    // icon: <Iconify icon="solar:users-group-rounded-bold" width={24} />,
  },
  {
    value: "gallery",
    label: "Thư viện ảnh",
    // icon: <Iconify icon="solar:gallery-wide-bold" width={24} />,
  },
];
