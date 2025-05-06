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
  /** Date custom scalar type */
  Date: { input: any; output: any };
};

export type AddInventoryInput = {
  /** Số lượng cần thêm vào kho */
  amount: Scalars["Int"]["input"];
  /** ID của thuốc cần thêm vào kho */
  drugId: Scalars["String"]["input"];
  /** Loại đơn vị: BASE (đơn vị cơ bản) hoặc PACKAGE (đơn vị đóng gói) */
  unitType: UnitType;
};

export type ClinicEntity = {
  __typename?: "ClinicEntity";
  address: Scalars["String"]["output"];
  clinicCode: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  owner?: Maybe<User>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  provinceCode?: Maybe<Scalars["String"]["output"]>;
  provinceName?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
};

export type ClinicOwnerInput = {
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type ClinicStatistics = {
  __typename?: "ClinicStatistics";
  /** Số lượng cuộc hẹn trong tháng hiện tại */
  appointmentsThisMonth: Scalars["Int"]["output"];
  /** Số lượng bệnh nhân mới trong tháng hiện tại */
  newPatientsThisMonth: Scalars["Int"]["output"];
  /** Doanh thu trong tháng (nếu có) */
  revenueThisMonth?: Maybe<Scalars["Int"]["output"]>;
  totalAppointments: Scalars["Int"]["output"];
  totalDoctors: Scalars["Int"]["output"];
  totalPatients: Scalars["Int"]["output"];
};

export type CreateClinicInput = {
  address: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  owner: ClinicOwnerInput;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  provinceCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateDrugInput = {
  /** Đơn vị cơ bản (PILL: Viên, AMPOULE: Ống) */
  baseUnit: DrugBaseUnitEnum;
  /** Mã thuốc - phải là duy nhất trong phòng khám */
  code: Scalars["String"]["input"];
  /** Tỷ lệ chuyển đổi (1 đơn vị đóng gói = ? đơn vị cơ bản), ví dụ: 1 hộp = 30 viên thì nhập 30 */
  conversionRate: Scalars["Int"]["input"];
  /** Giá nhập vào (đơn vị: VND) */
  costPrice?: InputMaybe<Scalars["Float"]["input"]>;
  /** Thành phần, hoạt chất của thuốc */
  ingredient?: InputMaybe<Scalars["String"]["input"]>;
  /** Tên thuốc */
  name: Scalars["String"]["input"];
  /** Đơn vị đóng gói (đơn vị lớn), ví dụ: hộp, chai, lọ */
  packageUnit: Scalars["String"]["input"];
  /** Giá bán ra (đơn vị: VND) */
  price: Scalars["Float"]["input"];
  /** Số lượng ban đầu (tính theo đơn vị cơ bản) */
  quantity: Scalars["Int"]["input"];
};

export type CreateExamOrderItemInput = {
  medicalExamId?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  result?: InputMaybe<Scalars["String"]["input"]>;
  serviceId: Scalars["String"]["input"];
};

export type CreateMedicalExamInput = {
  diagnosis?: InputMaybe<Scalars["String"]["input"]>;
  doctorId?: InputMaybe<Scalars["String"]["input"]>;
  examCode?: InputMaybe<Scalars["String"]["input"]>;
  examDate: Scalars["Date"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  patientId: Scalars["String"]["input"];
  reason?: InputMaybe<Scalars["String"]["input"]>;
  symptoms?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePatientInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  clinicId: Scalars["String"]["input"];
  dateOfBirth?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullName: Scalars["String"]["input"];
  gender?: InputMaybe<Gender>;
  healthInsuranceId?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<MetadataInput>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePrescriptionInput = {
  doctorId?: InputMaybe<Scalars["String"]["input"]>;
  items?: InputMaybe<Array<CreatePrescriptionItemInput>>;
  medicalExamId: Scalars["String"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  prescriptionCode?: InputMaybe<Scalars["String"]["input"]>;
  prescriptionDate: Scalars["Date"]["input"];
};

export type CreatePrescriptionItemInput = {
  drugId: Scalars["String"]["input"];
  instruction?: InputMaybe<Scalars["String"]["input"]>;
  prescriptionId?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  quantity: Scalars["Int"]["input"];
  total?: InputMaybe<Scalars["Float"]["input"]>;
  usage?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateServiceCategoryInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
};

export type CreateServiceInput = {
  canBookOnline?: InputMaybe<Scalars["Boolean"]["input"]>;
  categoryId?: InputMaybe<Scalars["String"]["input"]>;
  code: Scalars["String"]["input"];
  costPrice?: InputMaybe<Scalars["Float"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
};

export type CreateUserInput = {
  avatarId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<RoleEnum>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type DeviceInfoResponse = {
  __typename?: "DeviceInfoResponse";
  deviceId: Scalars["String"]["output"];
  deviceInfo?: Maybe<Scalars["String"]["output"]>;
  lastUsedAt: Scalars["Date"]["output"];
};

export type DispenseInventoryInput = {
  /** Số lượng cần xuất (luôn tính theo đơn vị cơ bản) */
  amount: Scalars["Int"]["input"];
  /** ID của thuốc cần xuất kho/kê đơn */
  drugId: Scalars["String"]["input"];
};

export type Drug = {
  __typename?: "Drug";
  /** Số lượng lẻ theo đơn vị cơ bản. Ví dụ: 35 viên % 30 = 5 viên */
  baseQuantityRemainder: Scalars["Int"]["output"];
  /** Đơn vị cơ bản của thuốc (đơn vị nhỏ nhất). PILL: Viên, AMPOULE: Ống */
  baseUnit: DrugBaseUnitEnum;
  /** Tên đơn vị cơ bản bằng tiếng Việt. Ví dụ: PILL → "Viên", AMPOULE → "Ống" */
  baseUnitName: Scalars["String"]["output"];
  /** Phòng khám sở hữu thuốc này */
  clinic: ClinicEntity;
  /** ID của phòng khám sở hữu thuốc này */
  clinicId: Scalars["String"]["output"];
  /** Mã thuốc - phải là duy nhất trong phòng khám */
  code: Scalars["String"]["output"];
  /** Tỷ lệ chuyển đổi (1 đơn vị đóng gói = ? đơn vị cơ bản). Ví dụ: 1 hộp = 30 viên thì giá trị là 30 */
  conversionRate: Scalars["Int"]["output"];
  /** Giá nhập vào (đơn vị: VND). Dùng để tính lợi nhuận */
  costPrice?: Maybe<Scalars["Float"]["output"]>;
  /** Ngày giờ tạo bản ghi */
  createdAt: Scalars["Date"]["output"];
  /** ID định danh duy nhất của thuốc */
  id: Scalars["ID"]["output"];
  /** Thành phần, hoạt chất của thuốc */
  ingredient?: Maybe<Scalars["String"]["output"]>;
  /** Trạng thái đã xóa hay chưa. True: đã xóa, False: chưa xóa */
  isDeleted: Scalars["Boolean"]["output"];
  /** Tên thuốc */
  name: Scalars["String"]["output"];
  /** Số lượng theo đơn vị đóng gói (làm tròn xuống). Ví dụ: 35 viên ÷ 30 = 1 hộp */
  packageQuantity: Scalars["Int"]["output"];
  /** Đơn vị đóng gói (đơn vị lớn), ví dụ: hộp, chai, lọ */
  packageUnit: Scalars["String"]["output"];
  /** Giá bán ra (đơn vị: VND) */
  price: Scalars["Float"]["output"];
  /** Số lượng hiện có (luôn tính theo đơn vị cơ bản) */
  quantity: Scalars["Int"]["output"];
  /** Chuỗi hiển thị thông tin tồn kho đầy đủ. Ví dụ: "240 viên (8 hộp và 0 viên)" hoặc "35 viên (1 hộp và 5 viên)" */
  stockDisplay: Scalars["String"]["output"];
  /** Ngày giờ cập nhật bản ghi gần nhất */
  updatedAt: Scalars["Date"]["output"];
};

/** Enum for drug base units */
export enum DrugBaseUnitEnum {
  /** Ống */
  AMPOULE = "AMPOULE",
  /** Viên */
  PILL = "PILL",
}

export type DrugFilterInput = {
  /** Số bản ghi mỗi trang (tối đa 100) */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Lọc thuốc có số lượng dưới ngưỡng (sắp hết hàng) */
  lowStock?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Ngưỡng cảnh báo sắp hết hàng (mặc định: 10) */
  lowStockThreshold?: InputMaybe<Scalars["Int"]["input"]>;
  /** Trang hiện tại (bắt đầu từ 1) */
  page?: InputMaybe<Scalars["Int"]["input"]>;
  /** Chuỗi tìm kiếm */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Tên trường để sắp xếp */
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Hướng sắp xếp (ASC/DESC) */
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type ExamOrderItem = {
  __typename?: "ExamOrderItem";
  clinicId: Scalars["String"]["output"];
  completed: Scalars["Boolean"]["output"];
  completedAt?: Maybe<Scalars["Date"]["output"]>;
  completedBy?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  medicalExam: MedicalExam;
  medicalExamId: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  result?: Maybe<Scalars["String"]["output"]>;
  service: Service;
  serviceId: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type ForgotPasswordDto = {
  email: Scalars["String"]["input"];
};

/** Gender options for patients */
export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  OTHER = "OTHER",
  UNSPECIFIED = "UNSPECIFIED",
}

export type LoginInput = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceInfo?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  clinicId?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
};

export type Media = {
  __typename?: "Media";
  clinicId?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  filename: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  metadata?: Maybe<Scalars["String"]["output"]>;
  mimetype: Scalars["String"]["output"];
  originalname: Scalars["String"]["output"];
  path: Scalars["String"]["output"];
  processingError?: Maybe<Scalars["String"]["output"]>;
  processingStatus?: Maybe<Scalars["String"]["output"]>;
  purpose?: Maybe<Scalars["String"]["output"]>;
  size: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
  uploaderId?: Maybe<Scalars["String"]["output"]>;
  uploaderType?: Maybe<UploaderType>;
  url: Scalars["String"]["output"];
  variants?: Maybe<Scalars["String"]["output"]>;
};

export type MediaWithParsedMetadata = {
  __typename?: "MediaWithParsedMetadata";
  clinicId?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["Date"]["output"];
  filename: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  metadata?: Maybe<Scalars["String"]["output"]>;
  mimetype: Scalars["String"]["output"];
  originalname: Scalars["String"]["output"];
  parsedMetadata?: Maybe<Scalars["String"]["output"]>;
  path: Scalars["String"]["output"];
  processingError?: Maybe<Scalars["String"]["output"]>;
  processingStatus?: Maybe<Scalars["String"]["output"]>;
  purpose?: Maybe<Scalars["String"]["output"]>;
  size: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
  uploaderId?: Maybe<Scalars["String"]["output"]>;
  uploaderType?: Maybe<UploaderType>;
  url: Scalars["String"]["output"];
  variants?: Maybe<Scalars["String"]["output"]>;
};

export type MedicalExam = {
  __typename?: "MedicalExam";
  clinic: ClinicEntity;
  clinicId: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  diagnosis?: Maybe<Scalars["String"]["output"]>;
  doctor?: Maybe<User>;
  doctorId?: Maybe<Scalars["String"]["output"]>;
  examCode?: Maybe<Scalars["String"]["output"]>;
  examDate: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  orderItems: Array<ExamOrderItem>;
  patient: Patient;
  patientId: Scalars["String"]["output"];
  prescriptions: Array<Prescription>;
  reason?: Maybe<Scalars["String"]["output"]>;
  symptoms?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
};

export type Metadata = {
  __typename?: "Metadata";
  key?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type MetadataInput = {
  key?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addInventory: Drug;
  addMultipleServiceOrders: Array<ExamOrderItem>;
  addServiceOrder: ExamOrderItem;
  completeServiceOrder: ExamOrderItem;
  createClinic: ClinicEntity;
  createClinicUser: User;
  createDrug: Drug;
  createMedicalExam: MedicalExam;
  createPatient: Patient;
  createPrescription: Prescription;
  createService: Service;
  createServiceCategory: ServiceCategory;
  createSystemUser: User;
  createUser: User;
  deleteDrug: Scalars["Boolean"]["output"];
  deleteMedia: Scalars["Boolean"]["output"];
  disableClinic: ClinicEntity;
  dispenseInventory: Drug;
  enableClinic: ClinicEntity;
  forgotPassword: Scalars["Boolean"]["output"];
  login: LoginResponse;
  logout: Scalars["Boolean"]["output"];
  logoutAll: Scalars["Boolean"]["output"];
  refreshToken: LoginResponse;
  removeClinic: Scalars["Boolean"]["output"];
  removeMedicalExam: Scalars["Boolean"]["output"];
  removePatient: Scalars["Boolean"]["output"];
  removePrescription: Scalars["Boolean"]["output"];
  removeService: Scalars["Boolean"]["output"];
  removeServiceCategory: Scalars["Boolean"]["output"];
  removeServiceOrder: Scalars["Boolean"]["output"];
  removeUser: Scalars["Boolean"]["output"];
  resetPassword: Scalars["Boolean"]["output"];
  setUserDefaultClinic: Scalars["Boolean"]["output"];
  switchClinic: LoginResponse;
  systemCreateClinic: ClinicEntity;
  systemRemoveClinic: Scalars["Boolean"]["output"];
  systemUpdateClinic: ClinicEntity;
  updateClinic: ClinicEntity;
  updateDrug: Drug;
  updateMedicalExam: MedicalExam;
  updatePatient: Patient;
  updatePrescription: Prescription;
  updateProfile: User;
  updateService: Service;
  updateServiceCategory: ServiceCategory;
  updateUser: User;
  updateUserRole: User;
  uploadMedia: Media;
};

export type MutationaddInventoryArgs = {
  input: AddInventoryInput;
};

export type MutationaddMultipleServiceOrdersArgs = {
  inputs: Array<CreateExamOrderItemInput>;
  medicalExamId: Scalars["ID"]["input"];
};

export type MutationaddServiceOrderArgs = {
  input: CreateExamOrderItemInput;
  medicalExamId: Scalars["ID"]["input"];
};

export type MutationcompleteServiceOrderArgs = {
  orderItemId: Scalars["ID"]["input"];
  result: Scalars["String"]["input"];
};

export type MutationcreateClinicArgs = {
  createClinicInput: CreateClinicInput;
};

export type MutationcreateClinicUserArgs = {
  clinicIds: Array<Scalars["String"]["input"]>;
  input: CreateUserInput;
};

export type MutationcreateDrugArgs = {
  input: CreateDrugInput;
};

export type MutationcreateMedicalExamArgs = {
  input: CreateMedicalExamInput;
};

export type MutationcreatePatientArgs = {
  createPatientInput: CreatePatientInput;
};

export type MutationcreatePrescriptionArgs = {
  input: CreatePrescriptionInput;
};

export type MutationcreateServiceArgs = {
  createServiceInput: CreateServiceInput;
};

export type MutationcreateServiceCategoryArgs = {
  createServiceCategoryInput: CreateServiceCategoryInput;
};

export type MutationcreateSystemUserArgs = {
  input: CreateUserInput;
};

export type MutationcreateUserArgs = {
  clinicIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  input: CreateUserInput;
};

export type MutationdeleteDrugArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationdeleteMediaArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationdisableClinicArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationdispenseInventoryArgs = {
  input: DispenseInventoryInput;
};

export type MutationenableClinicArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationforgotPasswordArgs = {
  input: ForgotPasswordDto;
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

export type MutationremoveClinicArgs = {
  id: Scalars["String"]["input"];
};

export type MutationremoveMedicalExamArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationremovePatientArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationremovePrescriptionArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationremoveServiceArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationremoveServiceCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationremoveServiceOrderArgs = {
  orderItemId: Scalars["ID"]["input"];
};

export type MutationremoveUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationresetPasswordArgs = {
  input: VerifyOtpDto;
};

export type MutationsetUserDefaultClinicArgs = {
  clinicId: Scalars["String"]["input"];
};

export type MutationswitchClinicArgs = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceInfo?: InputMaybe<Scalars["String"]["input"]>;
  input: SwitchClinicInput;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationsystemCreateClinicArgs = {
  input: CreateClinicInput;
};

export type MutationsystemRemoveClinicArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsystemUpdateClinicArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateClinicInput;
};

export type MutationupdateClinicArgs = {
  id: Scalars["String"]["input"];
  updateClinicInput: UpdateClinicInput;
};

export type MutationupdateDrugArgs = {
  input: UpdateDrugInput;
};

export type MutationupdateMedicalExamArgs = {
  input: UpdateMedicalExamInput;
};

export type MutationupdatePatientArgs = {
  id: Scalars["ID"]["input"];
  updatePatientInput: UpdatePatientInput;
};

export type MutationupdatePrescriptionArgs = {
  input: UpdatePrescriptionInput;
};

export type MutationupdateProfileArgs = {
  input: UpdateUserInput;
};

export type MutationupdateServiceArgs = {
  updateServiceInput: UpdateServiceInput;
};

export type MutationupdateServiceCategoryArgs = {
  updateServiceCategoryInput: UpdateServiceCategoryInput;
};

export type MutationupdateUserArgs = {
  id: Scalars["ID"]["input"];
  input: UpdateUserInput;
};

export type MutationupdateUserRoleArgs = {
  roleName: Scalars["String"]["input"];
  userId: Scalars["ID"]["input"];
};

export type MutationuploadMediaArgs = {
  input: UploadInput;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"]["output"];
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  total: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type PaginatedClinics = {
  __typename?: "PaginatedClinics";
  items?: Maybe<Array<ClinicEntity>>;
  pageInfo: PageInfo;
};

export type PaginatedDrugs = {
  __typename?: "PaginatedDrugs";
  items?: Maybe<Array<Drug>>;
  pageInfo: PageInfo;
};

export type PaginatedMedia = {
  __typename?: "PaginatedMedia";
  items?: Maybe<Array<Media>>;
  pageInfo: PageInfo;
};

export type PaginatedMedicalExams = {
  __typename?: "PaginatedMedicalExams";
  items?: Maybe<Array<MedicalExam>>;
  pageInfo: PageInfo;
};

export type PaginatedPatients = {
  __typename?: "PaginatedPatients";
  items?: Maybe<Array<Patient>>;
  pageInfo: PageInfo;
};

export type PaginatedPrescriptions = {
  __typename?: "PaginatedPrescriptions";
  items?: Maybe<Array<Prescription>>;
  pageInfo: PageInfo;
};

export type PaginatedServices = {
  __typename?: "PaginatedServices";
  items?: Maybe<Array<Service>>;
  pageInfo: PageInfo;
};

export type PaginatedUsers = {
  __typename?: "PaginatedUsers";
  items?: Maybe<Array<User>>;
  pageInfo: PageInfo;
};

export type PaginationInput = {
  /** Số bản ghi mỗi trang (tối đa 100) */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Trang hiện tại (bắt đầu từ 1) */
  page?: InputMaybe<Scalars["Int"]["input"]>;
  /** Chuỗi tìm kiếm */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Tên trường để sắp xếp */
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  /** Hướng sắp xếp (ASC/DESC) */
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type Patient = {
  __typename?: "Patient";
  address?: Maybe<Scalars["String"]["output"]>;
  clinic?: Maybe<ClinicEntity>;
  clinicId: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  dateOfBirth?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  fullName: Scalars["String"]["output"];
  gender?: Maybe<Gender>;
  healthInsuranceId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  metadata?: Maybe<Metadata>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phonePrefix?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["Date"]["output"];
};

export type Permission = {
  __typename?: "Permission";
  action: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  resource: Scalars["String"]["output"];
  roles?: Maybe<Array<Role>>;
  updatedAt: Scalars["Date"]["output"];
};

export type Prescription = {
  __typename?: "Prescription";
  clinic: ClinicEntity;
  clinicId: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  doctor?: Maybe<User>;
  doctorId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  items: Array<PrescriptionItem>;
  medicalExam: MedicalExam;
  medicalExamId: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  prescriptionCode?: Maybe<Scalars["String"]["output"]>;
  prescriptionDate: Scalars["Date"]["output"];
  updatedAt: Scalars["Date"]["output"];
};

export type PrescriptionItem = {
  __typename?: "PrescriptionItem";
  clinicId: Scalars["String"]["output"];
  createdAt: Scalars["Date"]["output"];
  drug: Drug;
  drugId: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  instruction: Scalars["String"]["output"];
  isActive: Scalars["Boolean"]["output"];
  prescription: Prescription;
  prescriptionId: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  quantity: Scalars["Int"]["output"];
  total: Scalars["Float"]["output"];
  updatedAt: Scalars["Date"]["output"];
  usage?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  activeServiceCategories: Array<ServiceCategory>;
  activeServices: Array<Service>;
  clinic: ClinicEntity;
  clinicStatistics: ClinicStatistics;
  clinicUsers: PaginatedUsers;
  clinicWithPatients: ClinicEntity;
  clinics: Array<ClinicEntity>;
  countServiceCategories: Scalars["Float"]["output"];
  countServices: Scalars["Float"]["output"];
  drug: Drug;
  drugs: PaginatedDrugs;
  getDeviceById: DeviceInfoResponse;
  getUserDevices: Array<DeviceInfoResponse>;
  hasClinicAccess: Scalars["Boolean"]["output"];
  isClinicUser: Scalars["Boolean"]["output"];
  isSystemUser: Scalars["Boolean"]["output"];
  me: User;
  media: PaginatedMedia;
  mediaById: MediaWithParsedMetadata;
  mediaByUser: PaginatedMedia;
  medicalExam: MedicalExam;
  medicalExamsByPatientPaginated: PaginatedMedicalExams;
  medicalExamsPaginated: PaginatedMedicalExams;
  onlineBookableServices: Array<Service>;
  patient: Patient;
  patientByEmail?: Maybe<Patient>;
  patientByPhone?: Maybe<Patient>;
  patients: PaginatedPatients;
  patientsByClinic: PaginatedPatients;
  prescription: Prescription;
  prescriptionsByMedicalExamPaginated: PaginatedPrescriptions;
  service: Service;
  serviceCategories: Array<ServiceCategory>;
  serviceCategory: ServiceCategory;
  services: PaginatedServices;
  servicesByCategory: Array<Service>;
  systemClinic: ClinicEntity;
  systemClinics: Array<ClinicEntity>;
  systemPaginatedClinics: PaginatedClinics;
  systemUsers: PaginatedUsers;
  user: User;
  userClinics: Array<ClinicEntity>;
  userDefaultClinicId?: Maybe<Scalars["String"]["output"]>;
  users: PaginatedUsers;
  usersByRole: PaginatedUsers;
};

export type QueryclinicArgs = {
  id: Scalars["String"]["input"];
};

export type QueryclinicStatisticsArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryclinicUsersArgs = {
  clinicId?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryclinicWithPatientsArgs = {
  id: Scalars["String"]["input"];
};

export type QuerydrugArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerydrugsArgs = {
  filter?: InputMaybe<DrugFilterInput>;
};

export type QuerygetDeviceByIdArgs = {
  deviceId: Scalars["String"]["input"];
};

export type QueryhasClinicAccessArgs = {
  clinicId: Scalars["String"]["input"];
};

export type QueryisClinicUserArgs = {
  userId: Scalars["ID"]["input"];
};

export type QueryisSystemUserArgs = {
  userId: Scalars["ID"]["input"];
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

export type QuerymedicalExamArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerymedicalExamsByPatientPaginatedArgs = {
  pagination?: InputMaybe<PaginationInput>;
  patientId: Scalars["ID"]["input"];
};

export type QuerymedicalExamsPaginatedArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerypatientArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerypatientByEmailArgs = {
  email: Scalars["String"]["input"];
};

export type QuerypatientByPhoneArgs = {
  phoneNumber: Scalars["String"]["input"];
};

export type QuerypatientsArgs = {
  clinicId?: InputMaybe<Scalars["String"]["input"]>;
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerypatientsByClinicArgs = {
  clinicId: Scalars["String"]["input"];
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryprescriptionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryprescriptionsByMedicalExamPaginatedArgs = {
  medicalExamId: Scalars["ID"]["input"];
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryserviceArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryserviceCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryservicesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryservicesByCategoryArgs = {
  categoryId: Scalars["ID"]["input"];
};

export type QuerysystemClinicArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerysystemPaginatedClinicsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QuerysystemUsersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryuserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryusersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type QueryusersByRoleArgs = {
  pagination?: InputMaybe<PaginationInput>;
  role: Scalars["String"]["input"];
};

export type RefreshTokenInput = {
  deviceId?: InputMaybe<Scalars["String"]["input"]>;
  deviceInfo?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken: Scalars["String"]["input"];
};

export type Role = {
  __typename?: "Role";
  createdAt: Scalars["Date"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  permissions?: Maybe<Array<Permission>>;
  updatedAt: Scalars["Date"]["output"];
};

/** The role enum defines available user roles in the system */
export enum RoleEnum {
  CLINIC_ADMIN = "CLINIC_ADMIN",
  DOCTOR = "DOCTOR",
  RECEPTIONIST = "RECEPTIONIST",
  SUPER_ADMIN = "SUPER_ADMIN",
  SYSTEM_ADMIN = "SYSTEM_ADMIN",
  SYSTEM_MANAGER = "SYSTEM_MANAGER",
}

export type Service = {
  __typename?: "Service";
  /** Cho phép đặt lịch online hay không */
  canBookOnline: Scalars["Boolean"]["output"];
  /** Danh mục dịch vụ */
  category?: Maybe<ServiceCategory>;
  /** ID của danh mục dịch vụ */
  categoryId?: Maybe<Scalars["String"]["output"]>;
  /** Phòng khám sở hữu dịch vụ này */
  clinic: ClinicEntity;
  /** ID của phòng khám sở hữu dịch vụ này */
  clinicId: Scalars["String"]["output"];
  /** Mã dịch vụ (unique trong phòng khám) */
  code: Scalars["String"]["output"];
  /** Giá gốc, dùng để tính lợi nhuận */
  costPrice?: Maybe<Scalars["Float"]["output"]>;
  /** Ngày giờ tạo bản ghi */
  createdAt: Scalars["Date"]["output"];
  /** Mô tả chi tiết dịch vụ */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Thời lượng dự kiến (VD: 30 phút) */
  duration?: Maybe<Scalars["Int"]["output"]>;
  /** ID định danh duy nhất của dịch vụ */
  id: Scalars["ID"]["output"];
  /** Đang hoạt động hay đã tạm ẩn */
  isActive: Scalars["Boolean"]["output"];
  /** Soft delete flag */
  isDeleted: Scalars["Boolean"]["output"];
  /** Tên dịch vụ (VD: Khám tổng quát, Nội soi dạ dày) */
  name: Scalars["String"]["output"];
  /** Giá tiền dịch vụ (VD: 200.000 VND) */
  price: Scalars["Float"]["output"];
  /** Ngày giờ cập nhật bản ghi gần nhất */
  updatedAt: Scalars["Date"]["output"];
};

export type ServiceCategory = {
  __typename?: "ServiceCategory";
  /** Phòng khám sở hữu danh mục dịch vụ này */
  clinic: ClinicEntity;
  /** ID của phòng khám sở hữu danh mục dịch vụ này */
  clinicId: Scalars["String"]["output"];
  /** Ngày giờ tạo bản ghi */
  createdAt: Scalars["Date"]["output"];
  /** Mô tả danh mục dịch vụ */
  description?: Maybe<Scalars["String"]["output"]>;
  /** ID định danh duy nhất của danh mục dịch vụ */
  id: Scalars["ID"]["output"];
  /** Đang hoạt động hay đã tạm ẩn */
  isActive: Scalars["Boolean"]["output"];
  /** Tên danh mục dịch vụ (VD: Xét nghiệm, Chẩn đoán hình ảnh) */
  name: Scalars["String"]["output"];
  /** Danh sách dịch vụ thuộc danh mục này */
  services?: Maybe<Array<Service>>;
  /** Ngày giờ cập nhật bản ghi gần nhất */
  updatedAt: Scalars["Date"]["output"];
};

export type SwitchClinicInput = {
  clinicId: Scalars["String"]["input"];
  setAsDefault?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Enum for unit types */
export enum UnitType {
  /** Đơn vị cơ bản */
  BASE = "BASE",
  /** Đơn vị đóng gói */
  PACKAGE = "PACKAGE",
}

export type UpdateClinicInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  provinceCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateDrugInput = {
  /** Đơn vị cơ bản (PILL: Viên, AMPOULE: Ống) */
  baseUnit?: InputMaybe<DrugBaseUnitEnum>;
  /** Mã thuốc - phải là duy nhất trong phòng khám */
  code?: InputMaybe<Scalars["String"]["input"]>;
  /** Tỷ lệ chuyển đổi (1 đơn vị đóng gói = ? đơn vị cơ bản), ví dụ: 1 hộp = 30 viên thì nhập 30 */
  conversionRate?: InputMaybe<Scalars["Int"]["input"]>;
  /** Giá nhập vào (đơn vị: VND) */
  costPrice?: InputMaybe<Scalars["Float"]["input"]>;
  /** ID của thuốc cần cập nhật */
  id: Scalars["ID"]["input"];
  /** Thành phần, hoạt chất của thuốc */
  ingredient?: InputMaybe<Scalars["String"]["input"]>;
  /** Tên thuốc */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Đơn vị đóng gói (đơn vị lớn), ví dụ: hộp, chai, lọ */
  packageUnit?: InputMaybe<Scalars["String"]["input"]>;
  /** Giá bán ra (đơn vị: VND) */
  price?: InputMaybe<Scalars["Float"]["input"]>;
  /** Số lượng ban đầu (tính theo đơn vị cơ bản) */
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateMedicalExamInput = {
  diagnosis?: InputMaybe<Scalars["String"]["input"]>;
  doctorId?: InputMaybe<Scalars["String"]["input"]>;
  examCode?: InputMaybe<Scalars["String"]["input"]>;
  examDate?: InputMaybe<Scalars["Date"]["input"]>;
  id: Scalars["ID"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  patientId?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  symptoms?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePatientInput = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateOfBirth?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Gender>;
  healthInsuranceId?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<MetadataInput>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePrescriptionInput = {
  doctorId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  items?: InputMaybe<Array<CreatePrescriptionItemInput>>;
  medicalExamId?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  prescriptionCode?: InputMaybe<Scalars["String"]["input"]>;
  prescriptionDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type UpdateServiceCategoryInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateServiceInput = {
  canBookOnline?: InputMaybe<Scalars["Boolean"]["input"]>;
  categoryId?: InputMaybe<Scalars["String"]["input"]>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  costPrice?: InputMaybe<Scalars["Float"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["ID"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateUserInput = {
  avatarId?: InputMaybe<Scalars["String"]["input"]>;
  clinicId?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phonePrefix?: InputMaybe<Scalars["String"]["input"]>;
  roleIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
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
  avatarId?: Maybe<Scalars["String"]["output"]>;
  clinics?: Maybe<Array<ClinicEntity>>;
  createdAt: Scalars["Date"]["output"];
  currentClinicId?: Maybe<Scalars["String"]["output"]>;
  defaultClinicId?: Maybe<ClinicEntity>;
  email: Scalars["String"]["output"];
  fullName?: Maybe<Scalars["String"]["output"]>;
  fullPhoneNumber?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  lastLoginAt?: Maybe<Scalars["Date"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phonePrefix?: Maybe<Scalars["String"]["output"]>;
  roles?: Maybe<Array<Role>>;
  updatedAt: Scalars["Date"]["output"];
  userType: UserType;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** Type of user in the system (system or clinic user) */
export enum UserType {
  CLINIC = "CLINIC",
  SYSTEM = "SYSTEM",
}

export type VerifyOtpDto = {
  email: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
  otp: Scalars["String"]["input"];
};
