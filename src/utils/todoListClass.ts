import { ITodoItem, StagesTodoEnum } from "../types/types";

export class TodoListClass {
  todoList: ITodoItem[];

  constructor(todoList: ITodoItem[]) {
    this.todoList = todoList;
  }

  public getTodoList(activeStage: StagesTodoEnum) {
    switch (activeStage) {
      case StagesTodoEnum.all:
        return this.todoList;
      case StagesTodoEnum.active:
        return this.todoList.filter((todo) => !todo.done)
      case StagesTodoEnum.completed:
        return this.todoList.filter((todo) => todo.done)
    }
  }

  public getItemsLeft() {
    return this.todoList.filter((todo) => !todo.done).length;
  }

  public setOneTodo(value: string) {
    const id = this.todoList.at(-1)?.id;
    const newTodo = { id: id ? id + 1 : 0, text: value, done: false };
    return [...this.todoList, newTodo];
  }

  public changeTodoDone(id: number) {
    const index = this.todoList.findIndex((v) => v.id === id);
    this.todoList[index].done = !this.todoList[index].done;
    return [...this.todoList];
  }

  public clearCompletedTodo() {
    return [...this.todoList].filter((todo) => !todo.done)
  }
}