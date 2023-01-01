import { groq } from 'next-sanity'
import { createClient } from "next-sanity";
import Post from './Post'
type Props = {
  posts: Post[];
}

function Posts({posts}: Props) {


  return <div className = "w-10/12">
    {posts.map(post => 
    <Post post = {post}/>
      )}
  </div>
}
export default Posts