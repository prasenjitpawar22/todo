import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Items", link: "/items" },
    // { name: "Boards" },
    // { name: "Sprints" },
    // { name: "Backlogs" },
  ];
  return (
    <div
      className="flex h-screen flex-col justify-between border-r border-secondary px-2 shadow-sm xs:w-fit sm:py-3
      md:py-4 xl:w-44 xl:gap-12 xl:py-12"
    >
      <div className="flex flex-col xs:gap-4 xl:gap-3">
        {navItems?.map((item, i) => (
          <Link key={i} to={item.link} className="flex">
            <Button
              variant={"secondary"}
              className="w-full hover:bg-primary hover:text-white "
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
