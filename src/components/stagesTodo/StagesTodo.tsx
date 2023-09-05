import React from "react";

import { StagesTodoEnum } from "../../types/types";

import { StageTodo } from "./stageTodo/StageTodo";

import styles from "./stagesTodo.module.css";

interface StagesTodoProps {
  itemsLeft: number;
  activeStage: StagesTodoEnum;
  setStage: (stage: StagesTodoEnum) => void;
  clearCompletedTodo: () => void;
}

const stages = [
  StagesTodoEnum.all,
  StagesTodoEnum.active,
  StagesTodoEnum.completed,
];

export const StagesTodo: React.FC<StagesTodoProps> = ({
  itemsLeft,
  activeStage,
  setStage,
  clearCompletedTodo,
}) => {
  return (
    <div className={styles.container}>
      <div>{itemsLeft} items left</div>
      <div className={styles.wrapper}>
        {stages.map((stage) => (
          <StageTodo
            key={stage}
            setStage={setStage}
            isActive={activeStage===stage}
            stage={stage}
          />
        ))}
      </div>
      <button onClick={clearCompletedTodo} className={styles.btn}>
        Clear completed
      </button>
    </div>
  );
};
