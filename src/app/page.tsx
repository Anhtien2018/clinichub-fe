import AuthGuard from "@/components/Auth/AuthGuard";
import Dashboard from "@/app/dashboard/page";

export default function Home() {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  );
}
