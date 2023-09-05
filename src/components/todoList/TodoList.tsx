import React, { useCallback, useMemo, useState } from "react";

import { TodoItem } from "../todoItem/TodoItem";
import { ITodoItem, StagesTodoEnum } from "../../types/types";
import { BlockForAdd } from "../blockForAdd/BlockForAdd";

import styles from "./todoList.module.css";
import { StagesTodo } from "../stagesTodo/StagesTodo";
import { TodoListClass } from "../../utils/todoListClass";

const initTodoList: ITodoItem[] = [
  { id: 0, text: "Проснуться", done: true },
  { id: 1, text: "Улыбнуться", done: false },
  { id: 2, text: "Почистить зубки", done: false },
  { id: 3, text: "Покушать", done: false },
  { id: 4, text: "Работать", done: true },
];

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState(initTodoList);
  const [activeStage, setActiveStage] = useState(StagesTodoEnum.all);

  const { tdList, itemsLeft } = useMemo(() => {
    const tdc = new TodoListClass(todoList);
    return {
      tdList: tdc.getTodoList(activeStage),
      itemsLeft: tdc.getItemsLeft(),
    };
  }, [todoList, activeStage]);

  const changeTodoItemDone = useCallback(
    (id: number) => {
      const tdc = new TodoListClass(todoList)
      setTodoList(tdc.changeTodoDone(id));
    },
    [tdList]
  );

  const setValueInArray = (value: string) => {
    setTodoList((pr) => {
      const tdc = new TodoListClass(pr);
      return tdc.setOneTodo(value);
    });
  };

  const clearCompletedTodo = () => {
    setTodoList((pr) => {
      const tdc = new TodoListClass(pr);
      return tdc.clearCompletedTodo()
    });
  };

  const setStage = (stage: StagesTodoEnum) => {
    setActiveStage(stage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>todos</div>
      <div className={styles.wrapper}>
        <BlockForAdd setValueInArray={setValueInArray} />
        <div className={styles.todoListWrapper}>
          {tdList.map((todo) => (
            <TodoItem key={todo.id} onClick={changeTodoItemDone} todo={todo} />
          ))}
        </div>
        <StagesTodo
          activeStage={activeStage}
          setStage={setStage}
          clearCompletedTodo={clearCompletedTodo}
          itemsLeft={itemsLeft}
        />
      </div>
    </div>
  );
};
