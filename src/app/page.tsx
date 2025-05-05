import { redirect } from "next/navigation";
import { paths } from "@/common/constants";

export default function Home() {
  redirect(paths.dashboard.dashboard);
}
