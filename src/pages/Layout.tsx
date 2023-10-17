import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { ModeToggle } from "../components/mode-toggle";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full gap-12 overflow-hidden bg-background">
      <Sidebar />
      <div className="flex w-full flex-col gap-4 overflow-hidden p-4">
        <div className="flex items-center justify-end">
          <ModeToggle />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
