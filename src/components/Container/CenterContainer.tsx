import React from 'react'
import styles from './CenterContainer.module.css'
const CenterContainer = ({children}:any) => {
  return (
    <div className={styles.center__container}>{children}</div>
  )
}

export default CenterContainer