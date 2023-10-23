import { Task, useBoard } from "@/components/board-provider";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Id",
    size: 350,
    minSize: 250,
  },
  {
    accessorKey: "title",
    header: "Title",
    enableResizing: false,
  },
  {
    accessorKey: "state",
    header: "Status",
    enableResizing: false,
    enableColumnFilter: true,
  },
];

export default function WorkItems() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const board = useBoard();

  useEffect(() => {
    const data = board.columns;
    let newTasks: Task[] = [];
    for (const key in data) {
      const obj = data[key];
      newTasks = newTasks.concat(obj.items);
    }
    setTasks(newTasks);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight dark:text-card-foreground">
        All Tasks
      </h3>
      <DataTable globalFiltering columns={columns} data={tasks} />
    </div>
  );
}
