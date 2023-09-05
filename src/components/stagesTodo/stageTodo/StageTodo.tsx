import React from "react";
import { StagesTodoEnum } from "../../../types/types";

import styles from "./styles.module.css";

interface StageTodoProps {
  stage: StagesTodoEnum;
  isActive: boolean;
  setStage: (stage: StagesTodoEnum) => void;
}

export const StageTodo: React.FC<StageTodoProps> = ({
  stage,
  isActive,
  setStage,
}) => {
  const handleClick = () => {
    setStage(stage);
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.container} ${isActive && styles.activeContainer}`}
    >
      {stage}
    </div>
  );
};
