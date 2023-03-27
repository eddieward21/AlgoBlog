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
const Main = async({profiles, categories, posts}: any) => {


  return (
    <div className = "w-full flex flex-col items-center overflow-scroll">

        <Profiles profiles = {profiles}/>
        <Posts categories = {categories} posts = {posts}/>
    </div>
  )
}

export default Main