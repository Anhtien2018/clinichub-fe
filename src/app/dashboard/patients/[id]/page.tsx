import ProfilePatients from "@/components/Patients/Profile/view/ProfilePatientsContent";
import { Metadata } from "next";
import React from "react";

export const metadata = { title: `Chi tiết bệnh nhân` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return <ProfilePatients />;
}
