"use client";

import { UpdatePasswordForm } from "@/components/dashboard/update-password-form";
import { ThemeSettings } from "@/components/dashboard/theme-settings";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <UpdatePasswordForm />
      <ThemeSettings />
    </div>
  );
}