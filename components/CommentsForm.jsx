import React, {useRef, useState, useEffect} from 'react'
import styles from '../styles/CommentsForm.module.css'

export const submitComment = async (obj) => {
  const result = await fetch(`/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
}

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email')

  }, [])

  const handleCommentSubmission = async function() {
    if (! commentEl.current.value || !nameEl.current.value || !emailEl.current.value) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 3000)
      setShowSuccessMessage(false)


    } else {
      setError(false);
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)

      submitComment(commentObj)
      .then((res) => {
        console.log("result: ", res)
      })

    }  

    const commentObj = {
      name: nameEl.current.value,
      comment: commentEl.current.value,
      email: emailEl.current.value
  }
  localStorage.setItem('name', nameEl.current.value)
  localStorage.setItem('email', emailEl.current.value)
  localStorage.setItem('comment', commentEl.current.value);

  }
  return (
    <div className={styles.commentsForm}>
      <textarea ref={commentEl} name="comment" id="" cols="30" rows="4"/>
      <input type="text" ref = {nameEl} name = "name"/>
      <input type="text" ref = {emailEl} name = "email"/>
    <button className={styles.commentBtn} onClick={handleCommentSubmission}>Submit</button>
    {error && <p>All fields are required.</p>}
    {showSuccessMessage && <p>Your comment was submitted.</p>}
    </div>
  )
}

export default CommentsForm