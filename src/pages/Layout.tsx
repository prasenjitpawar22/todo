import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { ModeToggle } from "../components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background xs:gap-2 xl:gap-12">
      <Sidebar />
      <div className="flex w-full flex-col items-end gap-4 p-4">
        <div className="flex items-center gap-2">
          <Button variant={"secondary"}>Span</Button>
          <ModeToggle />
        </div>
        <div className="flex w-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
