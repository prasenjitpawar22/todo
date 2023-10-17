import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";

export type WorkItem = {
  id: string;
  title: string;
  assignedTo: string;
  state: "In progress" | "Done" | "To do" | "In review";
  tags: string[];
  activityDate: string;
  comments: string[];
};

const workItems: WorkItem[] = [
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: "To do",
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: "To do",
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: "To do",
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: "To do",
    tags: [""],
    title: "Create user",
  },
  {
    activityDate: "",
    assignedTo: "",
    comments: [""],
    id: "31341",
    state: "To do",
    tags: [""],
    title: "Create user",
  },
];

const columns: ColumnDef<WorkItem>[] = [
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
  return (
    <>
      <DataTable columns={columns} data={workItems} />
    </>
  );
}
