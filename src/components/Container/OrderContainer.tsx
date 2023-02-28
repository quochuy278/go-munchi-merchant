import React from 'react'
import styles from './OrderContainer.module.css'

interface Props {
    children?: JSX.Element | JSX.Element[];
}

const OrderContainer = ({children}: Props) => {
    return <div className={styles.container}>{children}</div>;
}

export default OrderContainer