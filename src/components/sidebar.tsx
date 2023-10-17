import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <div
      className="flex h-screen flex-col justify-between border-r border-secondary px-2 shadow-sm xs:w-fit sm:py-3
      md:py-4 xl:w-44 xl:gap-12 xl:py-12"
    >
      <div className="flex flex-col xs:gap-4 xl:gap-12">
        <div className="gap- flex flex-col gap-4">
          <Button
            variant={"secondary"}
            className="w-full hover:bg-primary hover:text-white "
          >
            Todos
          </Button>
        </div>
      </div>
    </div>
  );
}
