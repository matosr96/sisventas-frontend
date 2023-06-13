import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <div className={styles.input}>
      <input
        {...rest}
        className={`${styles.input_element} ${
          className == "none" && styles.input_none
        }`}
      />
    </div>
  );
};

export default Input;
