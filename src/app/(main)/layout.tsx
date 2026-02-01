import AppFooter from "@/components/app-footer";
import AppNav from "@/components/app-navbar-top";
import AppSidebar from "@/components/app-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <AppNav /> */}
      <div className="h-14"></div>
      <div className="mx-none sm:mx-auto max-w-360 px-4 py-10 flex flex-col sm:flex-row">
        <AppSidebar />
        <main className="flex-1 ">{children}</main>
      </div>

      <AppFooter/>
    </div>
  );
}
