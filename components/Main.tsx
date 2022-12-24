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
const Main = async () => {
    const query = groq`*[_type=='post'] {
        ...,
        author->,
          categories[]->
      }
      `
    const posts = await client.fetch(query)
      
  return (
    <div className = "col-span-5 border border-white-500 flex flex-col items-center overflow-scroll">

        <Categories/>
        <Posts posts = {posts}/>
    </div>
  )
}

export default Main