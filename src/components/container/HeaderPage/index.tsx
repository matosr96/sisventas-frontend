import React from 'react'
import styles from './HeaderPage.module.css'

interface Props {
    title: string;
    children: React.ReactNode
}

const HeaderPage = ({title, children}: Props) => {
  return (
    <div className={styles.header_page}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default HeaderPage
