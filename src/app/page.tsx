import AuthGuard from "@/components/Auth/AuthGuard";
import AuthLayout from "@/components/Layouts/AuthLayout";
import DashboardContent from "@/components/Dashboard/View/Dashboard-Content";
import { Metadata } from "next";
export const metadata = { title: `Dashboard` } satisfies Metadata;

export default function Home() {
  return (
    <AuthGuard>
      <AuthLayout>
        <DashboardContent />
      </AuthLayout>
    </AuthGuard>
  );
}
