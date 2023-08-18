import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/layouts/site-header";
import { getAuthSession } from "@/lib/auth";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await getAuthSession();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SiteHeader user={session?.user} />
        <div>
          <main className="">{children}</main>
        </div>
      </div>
    </>
  );
}
