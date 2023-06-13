import React from 'react'
import styles from './Loader.module.css'

interface Props {
    small?: boolean;
    primary?: boolean;
}
const Loader = ({small, primary}: Props) => {
  
    const className = small ? styles["loader-small"] : styles.loader
    const spinnerClassName = small ? styles["spinner-small"] : styles.spinner;
    return (
    <div className={className}>
        <div className={`${spinnerClassName} ${primary?  styles.primary : null}`}></div>
    </div>
  )
}

export default Loader
