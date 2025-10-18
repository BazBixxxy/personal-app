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
  useSidebar,
} from "@/components/ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Home } from "lucide-react";
import { NavMain } from "./nav-main";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/theme-provider";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

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
        <AlertExit />
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

function AlertExit() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    return;
  };
  const { open } = useSidebar();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size={open ? "" : "icon"}
          className="m-2 mb-0"
          variant={theme === "light" ? "outline" : ""}
        >
          <span className={open ? "" : "sr-only"}>Exit Dashboard</span>
          <LogOutIcon className={open ? "hidde ml-auto size-4" : "size-5"} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Exit Dashboard</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}