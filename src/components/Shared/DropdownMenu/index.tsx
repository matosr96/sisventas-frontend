import { Link } from 'react-router-dom';
import styles from './DropdownMenu.module.css'

type Item = {
  path: string;
  label: string;
}

interface Props {
    title: string;
    items?: Item[];
}

const DropdownMenu = ({title, items}: Props) => {
  return (
    <span className={styles.container}>
      {title}
      <div className={styles.menu}>  
        {items?.map((item: Item) => (
        <Link to={item.path} key={item.path}>
          {item.label}
        </Link>  
        ))}
      </div>
    </span>
  )
}

export default DropdownMenu
