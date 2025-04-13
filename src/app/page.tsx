import AuthGuard from "@/components/Auth/AuthGuard";
import AuthLayout from "@/components/Layouts/AuthLayout";
import DashboardContent from "@/components/Dashboard/View/Dashboard-Content";

export default function Home() {
  return (
    <AuthGuard>
      <AuthLayout>
        <DashboardContent />
      </AuthLayout>
    </AuthGuard>
  );
}
