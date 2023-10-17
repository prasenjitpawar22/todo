import { Payment } from "@/components/data-table";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { v4 as uuidv4v4 } from "uuid";

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

// import React from "react";
// import "./index.css";

// import {
//   useReactTable,
//   ColumnResizeMode,
//   getCoreRowModel,
//   ColumnDef,
//   flexRender,
// } from "@tanstack/react-table";

// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: number;
// };

// const defaultData: Person[] = [
//   {
//     firstName: "tanner",
//     lastName: "linsley",
//     age: 24,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     firstName: "tandy",
//     lastName: "miller",
//     age: 40,
//     visits: 40,
//     status: "Single",
//     progress: 80,
//   },
//   {
//     firstName: "joe",
//     lastName: "dirte",
//     age: 45,
//     visits: 20,
//     status: "Complicated",
//     progress: 10,
//   },
// ];

// const defaultColumns: ColumnDef<Person>[] = [
//   {
//     header: "Name",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "firstName",
//         cell: (info) => info.getValue(),
//         footer: (props) => props.column.id,
//       },
//       {
//         accessorFn: (row) => row.lastName,
//         id: "lastName",
//         cell: (info) => info.getValue(),
//         header: () => <span>Last Name</span>,
//         footer: (props) => props.column.id,
//       },
//     ],
//   },
//   {
//     header: "Info",
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: "age",
//         header: () => "Age",
//         footer: (props) => props.column.id,
//       },
//       {
//         header: "More Info",
//         columns: [
//           {
//             accessorKey: "visits",
//             header: () => <span>Visits</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "status",
//             header: "Status",
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: "progress",
//             header: "Profile Progress",
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default function WorkItem() {
//   const [data, setData] = React.useState(() => [...defaultData]);
//   const [columns] = React.useState<typeof defaultColumns>(() => [
//     ...defaultColumns,
//   ]);

//   const [columnResizeMode, setColumnResizeMode] =
//     React.useState<ColumnResizeMode>("onChange");

//   const rerender = React.useReducer(() => ({}), {})[1];

//   const table = useReactTable({
//     data,
//     columns,
//     columnResizeMode,
//     getCoreRowModel: getCoreRowModel(),
//     debugTable: true,
//     debugHeaders: true,
//     debugColumns: true,
//   });

//   return (
//     <div className="p-2">
//       <select
//         value={columnResizeMode}
//         onChange={(e) =>
//           setColumnResizeMode(e.target.value as ColumnResizeMode)
//         }
//         className="rounded border border-black p-2"
//       >
//         <option value="onEnd">Resize: "onEnd"</option>
//         <option value="onChange">Resize: "onChange"</option>
//       </select>
//       <div className="h-4" />
//       <div className="text-xl">{"<table/>"}</div>
//       <div className="overflow-x-auto">
//         <table
//           {...{
//             style: {
//               width: table.getCenterTotalSize(),
//             },
//           }}
//         >
//           <thead>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th
//                     {...{
//                       key: header.id,
//                       colSpan: header.colSpan,
//                       style: {
//                         width: header.getSize(),
//                       },
//                     }}
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext(),
//                         )}
//                     <div
//                       {...{
//                         onMouseDown: header.getResizeHandler(),
//                         onTouchStart: header.getResizeHandler(),
//                         className: `resizer ${
//                           header.column.getIsResizing() ? "isResizing" : ""
//                         }`,
//                         style: {
//                           transform:
//                             columnResizeMode === "onEnd" &&
//                             header.column.getIsResizing()
//                               ? `translateX(${
//                                   table.getState().columnSizingInfo.deltaOffset
//                                 }px)`
//                               : "",
//                         },
//                       }}
//                     />
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => (
//                   <td
//                     {...{
//                       key: cell.id,
//                       style: {
//                         width: cell.column.getSize(),
//                       },
//                     }}
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="h-4" />
//       <div className="text-xl">{"<div/> (relative)"}</div>
//       <div className="overflow-x-auto">
//         <div
//           {...{
//             className: "divTable",
//             style: {
//               width: table.getTotalSize(),
//             },
//           }}
//         >
//           <div className="thead">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <div
//                 {...{
//                   key: headerGroup.id,
//                   className: "tr",
//                 }}
//               >
//                 {headerGroup.headers.map((header) => (
//                   <div
//                     {...{
//                       key: header.id,
//                       className: "th",
//                       style: {
//                         width: header.getSize(),
//                       },
//                     }}
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext(),
//                         )}
//                     <div
//                       {...{
//                         onMouseDown: header.getResizeHandler(),
//                         onTouchStart: header.getResizeHandler(),
//                         className: `resizer ${
//                           header.column.getIsResizing() ? "isResizing" : ""
//                         }`,
//                         style: {
//                           transform:
//                             columnResizeMode === "onEnd" &&
//                             header.column.getIsResizing()
//                               ? `translateX(${
//                                   table.getState().columnSizingInfo.deltaOffset
//                                 }px)`
//                               : "",
//                         },
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div
//             {...{
//               className: "tbody",
//             }}
//           >
//             {table.getRowModel().rows.map((row) => (
//               <div
//                 {...{
//                   key: row.id,
//                   className: "tr",
//                 }}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <div
//                     {...{
//                       key: cell.id,
//                       className: "td",
//                       style: {
//                         width: cell.column.getSize(),
//                       },
//                     }}
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="h-4" />
//       <div className="text-xl">{"<div/> (absolute positioning)"}</div>
//       <div className="overflow-x-auto">
//         <div
//           {...{
//             className: "divTable",
//             style: {
//               width: table.getTotalSize(),
//             },
//           }}
//         >
//           <div className="thead">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <div
//                 {...{
//                   key: headerGroup.id,
//                   className: "tr",
//                   style: {
//                     position: "relative",
//                   },
//                 }}
//               >
//                 {headerGroup.headers.map((header) => (
//                   <div
//                     {...{
//                       key: header.id,
//                       className: "th",
//                       style: {
//                         position: "absolute",
//                         left: header.getStart(),
//                         width: header.getSize(),
//                       },
//                     }}
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext(),
//                         )}
//                     <div
//                       {...{
//                         onMouseDown: header.getResizeHandler(),
//                         onTouchStart: header.getResizeHandler(),
//                         className: `resizer ${
//                           header.column.getIsResizing() ? "isResizing" : ""
//                         }`,
//                         style: {
//                           transform:
//                             columnResizeMode === "onEnd" &&
//                             header.column.getIsResizing()
//                               ? `translateX(${
//                                   table.getState().columnSizingInfo.deltaOffset
//                                 }px)`
//                               : "",
//                         },
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//           <div
//             {...{
//               className: "tbody",
//             }}
//           >
//             {table.getRowModel().rows.map((row) => (
//               <div
//                 {...{
//                   key: row.id,
//                   className: "tr",
//                   style: {
//                     position: "relative",
//                   },
//                 }}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <div
//                     {...{
//                       key: cell.id,
//                       className: "td",
//                       style: {
//                         position: "absolute",
//                         left: cell.column.getStart(),
//                         width: cell.column.getSize(),
//                       },
//                     }}
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="h-4" />
//       <button onClick={() => rerender()} className="border p-2">
//         Rerender
//       </button>
//       <pre>
//         {JSON.stringify(
//           {
//             columnSizing: table.getState().columnSizing,
//             columnSizingInfo: table.getState().columnSizingInfo,
//           },
//           null,
//           2,
//         )}
//       </pre>
//     </div>
//   );
// }
