import React from 'react'
import Link from 'next/link'
import styles from '../styles/CategoryCard.module.css'
import {AiOutlineArrowRight} from 'react-icons/fa';

const CategoryCard = ({category}) => {
  return (
      
    <a href = {"/categories/" + category.name}>
        <div className={styles.card}>
            <h3>{category.name}</h3>
        </div>
    </a>
  )
}

export default CategoryCard