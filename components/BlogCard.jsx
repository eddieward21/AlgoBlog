import React from 'react'
import styles from '../styles/BlogCard.module.css'
import Link from 'next/link'

const BlogCard = ({post}) => {
  return (
    
    <div class = {styles.card}>

      <a href = {"posts/" + post.slug} className = {styles.post}> 
        <img src = {post.coverPhoto.url} class = {styles.backgroundImage}/>
        <div className={styles.info}> 
        <h3>{post.title}</h3>
        <h6>{post.problem}</h6>
        </div>
      </a>

              <a href = {"authors/" + post.author.name} className={styles.author}> 
              <img className = {styles.avatar} src= "https://invisiblechildren.com/wp-content/uploads/2012/07/facebook-profile-picture-no-pic-avatar.jpg" alt="" />
              <h6> {post.author.name}</h6>
              
              </a>

    </div>

  )
}

export default BlogCard