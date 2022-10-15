import React from 'react'
import {gql, GraphQLClient} from 'graphql-request'
import BlogCard from '../../components/BlogCard'
import styles from '../../styles/CategorySlug.module.css'
import Navbar from '../../components/Navbar'


const graphcms = new GraphQLClient(
    process.env.API_ENDPOINT
)

const SLUGLIST = gql`
    query Slugs {
        categories {
            name
        }
    }
`
const QUERY = gql`
    query MyQuery($slug: String!) {
        posts(where: {categories_every: {name: $slug}}) {
        author {
            avatar {
            url
            }
            name
        }
        categories {
            name
        }
        content {
            html
        }
        coverPhoto {
            url
        }
        createdAt
        problem
        slug
        title
        approach
        }
    }
`

export async function getStaticPaths() {
    const {categories} = await graphcms.request(SLUGLIST)
    return {
        paths: categories.map((category) => ({params: {categorySlug:category.name}})),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    var slug = "Strings"
    var slug = params.categorySlug
    const data = await graphcms.request(QUERY, {slug})
    const posts = data.posts
    return {
        props: {
            slug,
            posts
        }
    }
}

const Category = ({posts, slug}) => {
  return (
    <div className={styles.grid}>
        <Navbar/>
        {posts.map((post) => 
        <BlogCard post = {post}/>
        )}


    </div>
  )
}

export default Category