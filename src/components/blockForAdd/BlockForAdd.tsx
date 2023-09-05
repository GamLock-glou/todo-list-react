import React, { useState } from "react";

import styles from "./blockForAdd.module.css";

interface BlockForAddProps {
  setValueInArray: (value: string) => void;
}

export const BlockForAdd: React.FC<BlockForAddProps> = ({
  setValueInArray,
}) => {
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value.length < 3) {
      return;
    }
    if (e.key === "Enter") {
      setValueInArray(value);
      setValue("");
    }
  };
  return (
    <input
      placeholder="What needs to be done?"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={styles.inputTxt}
    />
  );
};
