import { groq } from 'next-sanity'
import { createClient } from "next-sanity";
import Post from './Post'

type Props = {
  posts: Post[];
}

function Posts({posts}: Props) {
  console.log(posts.length)

  return <div className = "w-10/12">
    {posts.map(post => 
    <Post post = {post}/>
      )}
  </div>
}
export default Posts