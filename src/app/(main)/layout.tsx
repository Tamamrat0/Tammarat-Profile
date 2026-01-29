import AppNav from "@/components/app-navbar-top";
import AppSidebar from "@/components/app-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNav />

      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row">
        <AppSidebar />
        <main className="flex-1 ">{children}</main>
      </div>
    </>
  );
}
