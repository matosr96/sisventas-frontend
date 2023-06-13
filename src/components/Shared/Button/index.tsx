import Loader from '../Loader';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cancel' | 'third' | 'danger';
  className?: string;
  children?: React.ReactNode
  loading?: boolean;
}

const Button = ({ children, variant = 'primary', className = '', loading, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...rest}

>
    {loading ? <Loader small={true} /> :
      <>
        {children}
      </>
    }
    </button>
  );
};

export default Button;