import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {gql, GraphQLClient} from 'graphql-request'
import BlogCard from '../components/BlogCard'
import CategoryCard from '../components/CategoryCard'
import Navbar from '../components/Navbar'

const graphcms = new GraphQLClient(
  process.env.API_ENDPOINT
)

const CQUERY = gql`

query Categories {

    categories {
      name
    }
    
}
`

const QUERY = gql`

query Posts {
  posts {
    author {
      name
    }
    categories {
      name
    }
    approach
    problem
    createdAt
    datePublished
    id
    publishedAt
    slug
    title
    updatedAt
    coverPhoto {
      url
    }
    content {
      html
    }
  }
}
`

export async function getStaticProps () {
  const {posts} = await graphcms.request(QUERY)
  const {categories} = await graphcms.request(CQUERY)

  return {
    props: {
      posts,
      categories,
    }
  }
}
export default function Home({posts, categories}) {
  return (

    <div className={styles.container}>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">AlgoBlog!</a>
        </h1>

        <p className={styles.description}>
          To Store Your{' '}
          <code className={styles.code}>Algorithms</code>
        </p>

        <div className={styles.categoryGrid}>
        {categories.map((category) => 
          <CategoryCard category = {category}/>
          )}

        </div>

        <div className={styles.grid}>

          {posts.map((post) => 
          <BlogCard post = {post}
          />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
