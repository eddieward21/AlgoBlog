import React from 'react'
import Image from 'next/image'
import urlFor from '../utils/urlFor'

type Props = {
    post: Post
}
const Post = ({post} : Props) => {
  return (
    <div className = "flex flex-col h-64 w-full bg-black border border-white">

        <div className = "flex flex-row w-full justify-between items-center border border-white h-20">
            
            <div>
            <Image alt = {post.author.name} src = {urlFor(post.author.image).url()} width={50} height={50} className = "rounded-full"/>
            <h1 className = "text-white">{post.author.name}</h1>
            </div>

        </div>
        <div className = "h-40 w-full">
            <Image alt = {post.title} src = {urlFor(post.mainImage).url()} width={299} height={100} className = "w-full h-full"/>
        </div>
        <div>
            <h1 className = "text-white">{post.title}</h1>
            <h1 className = "text-white">post.category.title</h1>
        </div>
        <div>

        </div>
        <div>

        </div>

    </div>
  )
}

export default Post