import {
  ColumnDef,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import "@/pages/Items/index.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>("onChange");

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border border-secondary shadow">
      <Table>
        <TableHeader className="shadow-sm [&_tr]:border-secondary ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="" key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                console.log(headerGroup.headers.length, { index });

                return (
                  <TableHead
                    className="border-r border-secondary"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {index + 1 < headerGroup.headers.length ? (
                      <div
                        className={`resizer ${
                          header.column.getIsResizing() ? "isResizing" : ""
                        }`}
                        onMouseDown={header.getResizeHandler()}
                      />
                    ) : null}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-none text-secondary-foreground"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    style={{ width: cell.column.getSize() }}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

// import React from "react";
// import "@/pages/Items/index.css";

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

// export default function DataTable() {
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
//     <div className="bg-card-foreground p-2">
//       {/* <select
//         value={columnResizeMode}
//         onChange={(e) =>
//           setColumnResizeMode(e.target.value as ColumnResizeMode)
//         }
//         className="rounded border border-black p-2"
//       >
//         <option value="onEnd">Resize: "onEnd"</option>
//         <option value="onChange">Resize: "onChange"</option>
//       </select> */}
//       {/* <div className="h-4" />
//       <div className="text-xl">{"<table/>"}</div> */}
//       <div className="overflow-x-auto">
//         <table
//           className={"w-full caption-bottom text-sm"}
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
