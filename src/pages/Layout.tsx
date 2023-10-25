import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { ModeToggle } from "../components/mode-toggle";
import { isMobile } from "react-device-detect";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Layout() {
  if (isMobile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-primary-foreground">
        <Alert className="w-fit">
          <AlertTitle className="text-destructive">Heads up!</AlertTitle>
          <AlertDescription>
            This website is optimized for desktop use. Please visit on a desktop
            computer for the best experience.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

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
