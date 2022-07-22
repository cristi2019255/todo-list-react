import { ToDoInterface } from "../interfaces";

type ToDoFormProps = {
  addTask: (task: ToDoInterface) => void;
};

type ToDoListItemProps = {
  todo: ToDoInterface;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
};

type ToDoListProps = {};

export type { ToDoFormProps, ToDoListItemProps, ToDoListProps };
