import {
  ColumnDef,
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
import { Badge } from "./ui/badge";
import { columnstate } from "./board-provider";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border border-secondary shadow">
      <Table>
        <TableHeader className="shadow-sm [&_tr]:border-secondary ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="" key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                // console.log(headerGroup.headers.length, { index });
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
                    {cell.id === `${cell.row.index}_state` ? (
                      <Badge
                        variant={"secondary"}
                        className={`cursor-default select-none ${
                          cell.getValue() === columnstate.In_progress
                            ? `bg-blue-300 hover:bg-blue-300 dark:bg-blue-500 hover:dark:dark:bg-blue-500`
                            : cell.getValue() === columnstate.In_review
                            ? `bg-orange-300 hover:bg-orange-300 dark:bg-orange-500 hover:dark:bg-orange-500`
                            : cell.getValue() === columnstate.Done
                            ? `bg-green-300 hover:bg-green-300 dark:bg-green-500 hover:dark:bg-green-500`
                            : `text-inherit`
                        } `}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </Badge>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
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
