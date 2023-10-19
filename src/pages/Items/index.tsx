import { Task, columnstate, useBoard } from "@/components/board-provider";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

const workItems: Task[] = [
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: columnstate.Done,
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: columnstate.Done,
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: columnstate.Done,
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: columnstate.Done,
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: columnstate.Done,
    tags: [""],
    title: "Create user",
  },
];

const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "assignedTo", header: "Assigned To" },
  { accessorKey: "state", header: "Status" },
  { accessorKey: "tags", header: "Tags" },
  { accessorKey: "comments", header: "Comments" },
  { accessorKey: "activityDate", header: "Activity Date" },
];

export default function WorkItems() {
  // const / = useBoard()
  return (
    <>
      <DataTable columns={columns} data={workItems} />
    </>
  );
}
