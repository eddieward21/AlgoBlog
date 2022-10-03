import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <h1><a href = "/">AlgoBlog</a></h1>
        <p>Login</p>
    </div>  
    )
}

export default Navbar