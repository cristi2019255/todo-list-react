export interface IToDoNoId {
  title: string;
  completed: boolean;
  description?: string;
}

export interface ToDoInterface extends IToDoNoId {
  id: number;
}

export interface ToDosState {
  items?: ToDoInterface[];
  fetching: boolean;
  fetchingError?: Error;
  updatingError?: Error;
}

export interface IToDosProps extends ToDosState {
  getItems?: (page: number) => void;
  doneFecthingAll: boolean;
}
