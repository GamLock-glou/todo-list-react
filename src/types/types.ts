export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}

export enum StagesTodoEnum {
  all = 'All',
  active = 'Active',
  completed = 'Completed',
}
