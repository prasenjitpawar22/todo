import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { BadgePlus, Trash2Icon } from "lucide-react";
import React, { useState, Dispatch, useEffect, useCallback } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { v4 as uuidv4v4 } from "uuid";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

type TItem = {
  id: string;
  content: string;
  tag: string;
};

type TColumn = {
  name: string;
  items: TItem[];
};

type TColumns = {
  [x: string]: TColumn;
};

type ISetColumns = Dispatch<React.SetStateAction<TColumns>>;

const columnsFromBackend = {
  [uuidv4v4()]: {
    name: "To do",
    items: [],
  },
  [uuidv4v4()]: {
    name: "In Progress",
    items: [],
  },
  [uuidv4v4()]: {
    name: "In Review",
    items: [],
  },
  [uuidv4v4()]: {
    name: "Done",
    items: [],
  },
};

export default function Board() {
  const [columns, setColumns] = useState<TColumns>(columnsFromBackend);
  const [addFunctionCalled, setAddFunctionCalled] = useState({
    state: false,
    itemId: "",
  });

  // on drag
  const onDragEnd = useCallback(
    (result: DropResult, columns: TColumns, setColumns: ISetColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;

      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        destItems[destination.index].tag = destColumn.name;
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        });
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        });
      }
    },
    [],
  );
  // add task
  const handleAdd = useCallback(
    (columnId: string) => {
      const items = columns[columnId].items;
      const newItemId = uuidv4v4();
      const newItems: TItem[] = [
        { content: "", id: newItemId, tag: columns[columnId].name },
        ...items,
      ];

      setColumns({
        ...columns,
        [columnId]: {
          ...columns[columnId],
          items: newItems,
        },
      });
      setAddFunctionCalled({ state: true, itemId: newItemId });
    },
    [columns],
  );

  // delete task
  const handleDelete = useCallback(
    (item: TItem, column: TColumn, columnId: string) => {
      setColumns({
        ...columns,
        [columnId]: {
          ...column,
          items: columns[columnId].items.filter((i) => i.id != item.id),
        },
      });
    },
    [columns],
  );

  // focus the input field
  useEffect(() => {
    if (addFunctionCalled.state === true) {
      const input: HTMLInputElement | null = document.querySelector(
        `textarea[name="${addFunctionCalled.itemId}"]`,
      );
      input?.focus();
    }
  }, [addFunctionCalled]);

  return (
    <div className="flex w-full items-center">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns)?.map(([columnId, column], index) => {
          return (
            <div className="mx-2 flex flex-col" key={columnId}>
              <Card className="w-full rounded-bl-none rounded-br-none border-secondary bg-primary text-center text-secondary">
                <CardDescription className="text-md flex select-none justify-between px-4 py-2 font-[500] text-slate-100">
                  <span>{column.name}</span>
                  <span className="cursor-pointer transition-all duration-500 hover:text-secondary-foreground dark:hover:text-primary-foreground ">
                    <BadgePlus onClick={() => handleAdd(columnId)} />
                  </span>
                </CardDescription>
              </Card>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`h-[400px] w-56 overflow-y-auto overflow-x-hidden rounded-bl-xl rounded-br-xl bg-secondary ${
                        snapshot.isDraggingOver
                          ? "bg-primary"
                          : "bg-primary-foreground"
                      } `}
                    >
                      {column?.items?.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <Card
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{ ...provided.draggableProps.style }}
                                  className="m-2 border-secondary p-2 hover:cursor-default"
                                >
                                  <CardContent className="flex flex-col items-center justify-center gap-3 ">
                                    <Textarea
                                      name={item.id}
                                      id={item.id}
                                      className="resize-none overflow-hidden border-none shadow-none hover:cursor-default hover:overflow-auto hover:ring-1 focus-visible:cursor-text focus-visible:ring-2 "
                                      placeholder="Task title"
                                      // maxLength={20}
                                      ref={provided.innerRef}
                                      value={item.content}
                                      onChange={(e) => {
                                        const items = columns[columnId].items;
                                        setColumns({
                                          ...columns,
                                          [columnId]: {
                                            ...column,
                                            items: items.map((data, i) => {
                                              if (data.id === item.id) {
                                                data.content = e.target.value;
                                              }
                                              return data;
                                            }),
                                          },
                                        });
                                      }}
                                    />
                                    <div className="flex w-full items-end justify-end gap-2">
                                      <Badge variant={"secondary"}>
                                        {item.tag}
                                      </Badge>
                                      <Trash2Icon
                                        onClick={() =>
                                          handleDelete(item, column, columnId)
                                        }
                                        size={20}
                                        className="cursor-pointer text-secondary-foreground 
                                              hover:text-destructive"
                                      />
                                    </div>
                                  </CardContent>
                                </Card>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
