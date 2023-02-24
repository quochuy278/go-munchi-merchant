import React from 'react'
import styles from './index.module.css'
const CenterContainer = ({children}:any) => {
  return (
    <div className={styles.center__container}>{children}</div>
  )
}

export default CenterContainer