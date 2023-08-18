import { type SidebarNavItem } from "@/types";

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "user",
      items: [],
    },
    {
      title: "Account",
      href: "/dashboard/settings",
      icon: "user",
      items: [],
    },
  ],
};
