import Profiles from './Profiles'
import Categories from './Categories'
import Posts from './Posts'
import { groq } from 'next-sanity'
import { createClient } from "next-sanity";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: false,
});
const Main = async({categories}:any) => {
    const query = groq`*[_type=='post'] {
        ...,
        author->,
          categories[]->
      }| order(_createdAt desc) 
      `
    const posts = await client.fetch(query)  

    const profileQuery = groq`*[_type=='author'] {
      ...,
    }
    `
  const profiles = await client.fetch(profileQuery)
  

  return (
    <div className = "w-full flex flex-col items-center overflow-scroll">

        <Profiles profiles = {profiles}/>
        <Posts posts = {posts}/>
    </div>
  )
}

export default Main