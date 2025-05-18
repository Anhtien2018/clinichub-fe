import { Gender } from "@/graphql/type.interface";

import { useRouter } from "next/navigation";

export const router = (path: string) => {
  const router = useRouter();
  router.push(path);
};

export function formatDateTime(
  isoString: string,
  withTime: boolean = false
): string {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  if (withTime) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}, ${day}/${month}/${year}`;
  } else {
    return `${day}/${month}/${year}`;
  }
}

export const formatCurrencyVND = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(amount);
};

export function generateGenderVi(gender: Gender): string {
  switch (gender) {
    case Gender.FEMALE:
      return "Nữ";
    case Gender.MALE:
      return "Nam";
    case Gender.OTHER:
      return "Khác";
    case Gender.UNSPECIFIED:
      return "Không xác định";
    default:
      return "Không rõ";
  }
}
