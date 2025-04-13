export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type AdminDeviceInfoResponse = {
  __typename?: "AdminDeviceInfoResponse";
  deviceId: Scalars["String"]["output"];
  deviceInfo?: Maybe<Scalars["String"]["output"]>;
  lastUsedAt: Scalars["DateTime"]["output"];
};

export type AdminLoginInput = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceInfo?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type AdminLoginResponse = {
  __typename?: "AdminLoginResponse";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  deviceId?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
};

export type AdminRefreshTokenInput = {
  deviceId: Scalars["String"]["input"];
  refreshToken: Scalars["String"]["input"];
};

/** The role of the admin user */
export enum AdminRole {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  SYSTEM_MANAGER = "SYSTEM_MANAGER",
}

/** Administrative user model */
export type AdminUser = {
  __typename?: "AdminUser";
  avatarDetail?: Maybe<Media>;
  avatarId?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phonePrefix?: Maybe<Scalars["String"]["output"]>;
  role: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  username: Scalars["String"]["output"];
};

export type CreateAdminUserDto = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
  phonePrefix?: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type CreateTenantInput = {
  code: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  isActive: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
};

export type CreateUserDto = {
  email: Scalars["String"]["input"];
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<UserRole>;
};

export type DeviceInfoResponse = {
  __typename?: "DeviceInfoResponse";
  deviceId: Scalars["String"]["output"];
  deviceInfo?: Maybe<Scalars["String"]["output"]>;
  lastUsedAt: Scalars["DateTime"]["output"];
};

export type ForgotPasswordDto = {
  email: Scalars["String"]["input"];
};

export type LoginInput = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceInfo?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  accessToken: Scalars["String"]["output"];
  deviceId?: Maybe<Scalars["String"]["output"]>;
  refreshToken: Scalars["String"]["output"];
  role: Scalars["String"]["output"];
};

export type Media = {
  __typename?: "Media";
  createdAt: Scalars["DateTime"]["output"];
  filename: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  metadata?: Maybe<Scalars["String"]["output"]>;
  mimetype: Scalars["String"]["output"];
  originalname: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  purpose?: Maybe<Scalars["String"]["output"]>;
  size: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  uploaderId?: Maybe<Scalars["String"]["output"]>;
  uploaderType?: Maybe<UploaderType>;
  url: Scalars["String"]["output"];
};

export type MediaWithParsedMetadata = {
  __typename?: "MediaWithParsedMetadata";
  createdAt: Scalars["DateTime"]["output"];
  filename: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  metadata?: Maybe<Scalars["String"]["output"]>;
  mimetype: Scalars["String"]["output"];
  originalname: Scalars["String"]["output"];
  parsedMetadata?: Maybe<Scalars["String"]["output"]>;
  path: Scalars["String"]["output"];
  purpose?: Maybe<Scalars["String"]["output"]>;
  size: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  uploaderId?: Maybe<Scalars["String"]["output"]>;
  uploaderType?: Maybe<UploaderType>;
  url: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  admin_adminCreateUser: AdminUser;
  admin_adminDeleteUser: Scalars["Boolean"]["output"];
  admin_adminForgotPassword: Scalars["Boolean"]["output"];
  admin_adminLogin: AdminLoginResponse;
  admin_adminLogout: Scalars["Boolean"]["output"];
  admin_adminLogoutAll: Scalars["Boolean"]["output"];
  admin_adminRefreshToken: AdminLoginResponse;
  admin_adminResetPassword: Scalars["Boolean"]["output"];
  admin_adminUpdateUser: AdminUser;
  admin_createUser: User;
  admin_removeAdminDevice: Scalars["Boolean"]["output"];
  admin_removeUser: Scalars["Boolean"]["output"];
  admin_updateUser: User;
  admin_updateUserRole: User;
  createTenant: Tenant;
  createUser: User;
  deleteMedia: Scalars["Boolean"]["output"];
  forgotPassword: Scalars["Boolean"]["output"];
  login: LoginResponse;
  logout: Scalars["Boolean"]["output"];
  logoutAll: Scalars["Boolean"]["output"];
  refreshToken: LoginResponse;
  removeDevice: Scalars["Boolean"]["output"];
  removeTenant: Scalars["Boolean"]["output"];
  removeUser: Scalars["Boolean"]["output"];
  resetPassword: Scalars["Boolean"]["output"];
  updateProfile: User;
  updateTenant: Tenant;
  updateUser: User;
  updateUserRole: User;
  uploadMedia: Media;
  userForgotPassword: Scalars["Boolean"]["output"];
  userResetPassword: Scalars["Boolean"]["output"];
};

export type Mutationadmin_adminCreateUserArgs = {
  input: CreateAdminUserDto;
};

export type Mutationadmin_adminDeleteUserArgs = {
  id: Scalars["String"]["input"];
};

export type Mutationadmin_adminForgotPasswordArgs = {
  input: ForgotPasswordDto;
};

export type Mutationadmin_adminLoginArgs = {
  adminLoginInput: AdminLoginInput;
};

export type Mutationadmin_adminLogoutArgs = {
  refreshToken: Scalars["String"]["input"];
};

export type Mutationadmin_adminRefreshTokenArgs = {
  refreshTokenInput: AdminRefreshTokenInput;
};

export type Mutationadmin_adminResetPasswordArgs = {
  input: VerifyOtpDto;
};

export type Mutationadmin_adminUpdateUserArgs = {
  id: Scalars["String"]["input"];
  input: UpdateAdminUserDto;
};

export type Mutationadmin_createUserArgs = {
  input: CreateUserDto;
};

export type Mutationadmin_removeAdminDeviceArgs = {
  deviceId: Scalars["String"]["input"];
};

export type Mutationadmin_removeUserArgs = {
  id: Scalars["ID"]["input"];
};

export type Mutationadmin_updateUserArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateUserDto;
};

export type Mutationadmin_updateUserRoleArgs = {
  role: UserRole;
  userId: Scalars["ID"]["input"];
};

export type MutationcreateTenantArgs = {
  input: CreateTenantInput;
};

export type MutationcreateUserArgs = {
  input: CreateUserDto;
};

export type MutationdeleteMediaArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationforgotPasswordArgs = {
  input: UserForgotPasswordDto;
};

export type MutationloginArgs = {
  loginInput: LoginInput;
};

export type MutationlogoutArgs = {
  refreshToken: Scalars["String"]["input"];
};

export type MutationrefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput;
};

export type MutationremoveDeviceArgs = {
  deviceId: Scalars["String"]["input"];
};

export type MutationremoveTenantArgs = {
  id: Scalars["String"]["input"];
};

export type MutationremoveUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationresetPasswordArgs = {
  input: UserVerifyOtpDto;
};

export type MutationupdateProfileArgs = {
  input: UpdateUserDto;
};

export type MutationupdateTenantArgs = {
  id: Scalars["String"]["input"];
  input: UpdateTenantInput;
};

export type MutationupdateUserArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateUserDto;
};

export type MutationupdateUserRoleArgs = {
  role: UserRole;
  userId: Scalars["ID"]["input"];
};

export type MutationuploadMediaArgs = {
  input: UploadInput;
};

export type MutationuserForgotPasswordArgs = {
  input: UserForgotPasswordDto;
};

export type MutationuserResetPasswordArgs = {
  input: UserVerifyOtpDto;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"]["output"];
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  total: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type PaginatedAdminUsers = {
  __typename?: "PaginatedAdminUsers";
  items: Array<AdminUser>;
  pageInfo: PageInfo;
};

export type PaginatedMedia = {
  __typename?: "PaginatedMedia";
  items: Array<Media>;
  pageInfo: PageInfo;
};

export type PaginatedUsers = {
  __typename?: "PaginatedUsers";
  items: Array<User>;
  pageInfo: PageInfo;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  admin_adminMe: AdminUser;
  admin_adminUser: AdminUser;
  admin_adminUsers: PaginatedAdminUsers;
  admin_getAdminDevices: Array<AdminDeviceInfoResponse>;
  admin_user: User;
  admin_users: PaginatedUsers;
  admin_usersByRole: PaginatedUsers;
  getDeviceById: DeviceInfoResponse;
  getUserDevices: Array<DeviceInfoResponse>;
  me: User;
  media: PaginatedMedia;
  mediaById: MediaWithParsedMetadata;
  mediaByUser: PaginatedMedia;
  tenant: Tenant;
  tenants: Array<Tenant>;
  user: User;
  users: PaginatedUsers;
  usersByRole: PaginatedUsers;
};

export type Queryadmin_adminUserArgs = {
  id: Scalars["String"]["input"];
};

export type Queryadmin_adminUsersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type Queryadmin_userArgs = {
  id: Scalars["ID"]["input"];
};

export type Queryadmin_usersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type Queryadmin_usersByRoleArgs = {
  pagination?: InputMaybe<PaginationInput>;
  role: UserRole;
};

export type QuerygetDeviceByIdArgs = {
  deviceId: Scalars["String"]["input"];
};

export type QuerymediaArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerymediaByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerymediaByUserArgs = {
  pagination?: InputMaybe<PaginationInput>;
  userId: Scalars["ID"]["input"];
};

export type QuerytenantArgs = {
  id: Scalars["String"]["input"];
};

export type QueryuserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryusersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryusersByRoleArgs = {
  pagination?: InputMaybe<PaginationInput>;
  role: UserRole;
};

export type RefreshTokenInput = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceInfo?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken: Scalars["String"]["input"];
};

export type Tenant = {
  __typename?: "Tenant";
  code: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  isActive: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type UpdateAdminUserDto = {
  avatarId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<AdminRole>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateTenantInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<UserRole>;
};

export type UploadInput = {
  /** File to upload (accepts multipart form or base64) */
  file: Scalars["String"]["input"];
  metadata?: InputMaybe<Scalars["String"]["input"]>;
  purpose?: InputMaybe<Scalars["String"]["input"]>;
};

/** Type of uploader: user or admin */
export enum UploaderType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  fullName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastLoginAt?: Maybe<Scalars["DateTime"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phonePrefix?: Maybe<Scalars["String"]["output"]>;
  role: UserRole;
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserForgotPasswordDto = {
  email: Scalars["String"]["input"];
};

/** The role of the user */
export enum UserRole {
  CLINIC_ADMIN = "CLINIC_ADMIN",
  CUSTOMER = "CUSTOMER",
  DOCTOR = "DOCTOR",
  RECEPTIONIST = "RECEPTIONIST",
  TENANT_ADMIN = "TENANT_ADMIN",
}

export type UserVerifyOtpDto = {
  email: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
  otp: Scalars["String"]["input"];
};

export type VerifyOtpDto = {
  email: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
  otp: Scalars["String"]["input"];
};
