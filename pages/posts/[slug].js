import { GraphQLClient, gql } from "graphql-request";
import styles from '../../styles/Slug.module.css'
import Navbar from '../../components/Navbar'
import CommentsForm from '../../components/CommentsForm'
import Comments from '../../components/Comments'
import comments from "../api/comments";

const graphcms = new GraphQLClient(
    process.env.API_ENDPOINT
)

const QUERY = gql`
query Post($slug: String!) {
post(where: {slug: $slug}) {
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
const SLUGLIST = gql`
    query Slugs {
        posts {
            slug
        }
    }
`

const commentsQuery = gql`
query GetComments($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
        name
        comment
    }
}
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST)
    return {
    paths: posts.map((post) => ({params: {slug:post.slug}})),
    fallback: false,
    }
}

export async function getStaticProps({params}) {
    const slug = params.slug
    const data = await graphcms.request(QUERY, {slug})
    const post = data.post;


    return {
        props: {
            slug,
            post
        }
    }
}
const BlogPost = ({post, slug}) => {
  return (
    <div className={styles.main}>
        <Navbar/>

        <br></br>
        <br></br>
        <a href = "/">Back</a>
        <h1>{post.title}</h1>

        <h6>{post.datePublished}</h6>
        <p>{post.problem}</p>
        <span>{post.approach}</span>
        <div className={styles.solution}
        dangerouslySetInnerHTML={{__html:post.content.html}} >
             </div>
       <img className={styles.mainPhoto} src = {post.coverPhoto.url}/>
       <CommentsForm slug = {slug}/>
        <Comments/>
    </div>
  )
}

export default BlogPost