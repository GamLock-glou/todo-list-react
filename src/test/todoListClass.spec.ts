import { ITodoItem, StagesTodoEnum } from "../types/types";
import { TodoListClass } from "../utils/todoListClass";

describe("test todoList class", () => {

  const initTodoList: ITodoItem[] = [
    { id: 0, text: "Проснуться", done: true },
    { id: 1, text: "Улыбнуться", done: false },
    { id: 2, text: "Почистить зубки", done: false },
    { id: 3, text: "Покушать", done: false },
    { id: 4, text: "Работать", done: true },
  ];

  const activeTodoList = [
    { id: 1, text: "Улыбнуться", done: false },
    { id: 2, text: "Почистить зубки", done: false },
    { id: 3, text: "Покушать", done: false },
  ];

  const completedTodoList = [
    { id: 0, text: "Проснуться", done: true },
    { id: 4, text: "Работать", done: true },
  ];

  const tdClass = new TodoListClass(initTodoList);

  test("getTodoList", () => {
    expect(tdClass.getTodoList(StagesTodoEnum.active)).toEqual(activeTodoList)
    expect(tdClass.getTodoList(StagesTodoEnum.completed)).toEqual(completedTodoList)
    expect(tdClass.getTodoList(StagesTodoEnum.all)).toEqual(initTodoList)
  });

  test("getItemsLeft", () => {
    expect(tdClass.getItemsLeft()).toEqual(3)
  });

  test("setOneTodo", () => {
    const value = 'hello';
    const newTodoList = [...initTodoList, {id: 5, text: value, done: false}]
    expect(tdClass.setOneTodo(value)).toEqual(newTodoList)
  });

  test("setOneTodo zero todoList", () => {
    const tdClass = new TodoListClass([]);
    const value = 'hello';
    const newTodoList = [{id: 0, text: value, done: false}]
    expect(tdClass.setOneTodo(value)).toEqual(newTodoList)
  });

  test("changeTodoDone", () => {
    const todoList = [...initTodoList];
    todoList[0].done = false;
    expect(tdClass.changeTodoDone(0)).toEqual(todoList)
  });

  test("clearCompletedTodo", () => {
    expect(tdClass.clearCompletedTodo()).toEqual(activeTodoList)
  });
});
