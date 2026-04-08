import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>This is the Header</h1>
        <div className={styles.btn}>Click me</div>
    </div>
  )
}

export default Header
