import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { ModeToggle } from "../components/mode-toggle";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background xs:gap-2 xl:gap-4">
      <Sidebar />
      <div className="flex w-full flex-col items-end gap-2 p-4">
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
        <div className="flex w-full overflow-auto p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
