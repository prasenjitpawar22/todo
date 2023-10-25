import { Button } from "@/components/ui/button";
import { LucideKanbanSquare, LucideListTodo } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Board", link: "/", icon: <LucideKanbanSquare size={20} /> },
    { name: "Items", link: "/items", icon: <LucideListTodo size={20} /> },
  ];
  return (
    <div
      className="flex h-screen flex-col justify-between border-r border-secondary px-2 shadow-sm xs:w-fit xs:py-4 sm:py-3
      md:py-4 xl:w-44 xl:gap-12 xl:py-12"
    >
      <div className="flex flex-col xs:gap-4 xl:gap-3">
        {navItems?.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            className={({ isActive }) =>
              `flex ` +
              (isActive ? `[&>button]:bg-primary [&>button]:text-white ` : ``)
            }
          >
            <Button
              variant={"secondary"}
              className="flex w-full items-center gap-1 hover:bg-primary hover:text-white "
            >
              <span>{item.icon}</span>
              {item.name}
            </Button>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
