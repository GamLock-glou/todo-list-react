import React from "react";

import { ITodoItem } from "../../types/types";

import styles from './todoItem.module.css';

interface TodoItemProps {
  todo: ITodoItem;
  onClick: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = React.memo(({
  todo,
  onClick,
}) => {
  const {id, text, done} = todo;
  const handleClick = () => {
    onClick(id)
  };
  return (
    <>
      <div onClick={handleClick} className={styles.wrapperCheckBox}>
        <div className={styles.checkBox}>
          {done ? '✓' : null}
        </div>
        <label className={done ? styles.text : ''}>{text}</label>
      </div>
      <div className={styles.line} />
    </>
  );
});
