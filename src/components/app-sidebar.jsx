import * as React from "react";

import { Calendars } from "@/components/calendars";
import { DatePicker } from "@/components/date-picker";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Home } from "lucide-react";
import { NavMain } from "./nav-main";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/home",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/home",
        },
        {
          title: "New Article",
          url: `/dashboard/articles/add`,
        },
      ],
    },
  ],
  calendars: [
    // {
    //   name: "My Calendars",
    //   items: ["Personal", "Work", "Family"],
    // },
    // {
    //   name: "Favorites",
    //   items: ["Holidays", "Birthdays"],
    // },
    // {
    //   name: "Other",
    //   items: ["Travel", "Reminders", "Deadlines"],
    // },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <DatePicker />
        <Calendars calendars={data.calendars} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-16 border-b border-sidebar-border">
              <NavUser user={data.user} />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
