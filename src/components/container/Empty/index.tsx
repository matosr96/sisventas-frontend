import { Button } from "../../Shared";
import styles from "./Empty.module.css";

interface Props {
  title: string;
  copy: string;
  image: string;
}

const Empty = ({ title, copy, image }: Props) => {
  return (
    <div className={styles.container_empty}>
      <img src={image} alt={title} />
      <h2>{title}s</h2>
      <p>{copy}</p>
      <div className={styles.options}>
        <Button>Añadir {title.toLowerCase()}</Button>
      </div>
    </div>
  );
};

export default Empty;
