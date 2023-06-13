import React from "react";
import styles from "./ImageInput.module.css";

interface Props {
  value?: string;
  name?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
}

const ImageInput = ({ value, onChange }: Props) => {
  return (
    <div className={styles.formbold_file_input}>
      <input
        type="file"
        name="file"
        id="file"
        value={value}
        onChange={onChange}
      />
      <label htmlFor="file">
        <span className={styles.formbold_drop_file}>Cargar foto...</span>
        
      </label>
    </div>
  );
};

export default ImageInput;
