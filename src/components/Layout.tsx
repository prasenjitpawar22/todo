import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { ModeToggle } from "./mode-toggle";

export default function Layout() {
  return (
    <div className="flex w-full gap-12 overflow-hidden bg-background">
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
