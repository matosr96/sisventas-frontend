import React, { Fragment, ReactNode } from 'react'
import styles from './Breadcrumbs.module.css'

interface Props {
    items: ReactNode[]
}

const Breadcrumbs = ({items}: Props) => {
  return (
    <div className={styles.container}>
      {items.map((item:ReactNode, index:number) => (
        <Fragment key={item?.toString()}>
            {index !== 0 && <span className={styles.divider}> {'>'} </span>}
            {item}
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs