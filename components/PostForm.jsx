import React, {useRef, useState, useEffect} from 'react'

export const submitComment = async(obj) => {
    const result = await fetch('/api/post,' ,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
})
    return result.json();
}

const PostForm = () => {
    const authorEl = useRef();
    const problemEl = useRef();
    const contentEl = useRef();
    const approachEl = useRef();
    const [error, setError] = useState(false);

    
  return (
    <div>
        <p>Add A Post</p>
        <input type="text" name = "author" />
        <input type="text" name = "problem" />
        <input type="text" name = "content" />
        <input type="text" name = "approach" />
    </div>
  )
}

export default PostForm