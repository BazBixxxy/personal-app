import { AppSidebar } from "@/components/app-sidebar";
import LoadingSpinner from "@/components/loading-spinner";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import ProfileComponent from "@/components/profile/profile-component";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const today = new Date();
  // Format the selected date for display
  const formattedDate = new Date(today).toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 z-20">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">
                    {formattedDate}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <AnimatedThemeToggler />
            <ProfileComponent />
          </div>
        </header>
        <div className="min-h-screen px-2 md:px-4 lg:px-6">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
