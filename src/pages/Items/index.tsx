import { Task, columnstate, useBoard } from "@/components/board-provider";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Id",
    size: 350,
  },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "assignedTo", header: "Assigned To" },
  { accessorKey: "state", header: "Status" },
  { accessorKey: "tags", header: "Tags" },
  { accessorKey: "comments", header: "Comments" },
  {
    accessorKey: "activityDate",
    header: "Activity Date",
    enableResizing: false,
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
    <>
      <DataTable columns={columns} data={tasks} />
    </>
  );
}
