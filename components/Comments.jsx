import React, {useEffect, useState} from 'react'
import request, {gql, GraphQLClient} from 'graphql-request'
import styles from '../styles/Comments.module.css'

const graphcms = new GraphQLClient(
  process.env.API_ENDPOINT  

)

export async function getComments(slug) {
  const query = gql`
  query CommentsQuery($slug: String!) {
    comments(where: { post: { slug: $slug} } ) {
      name
      email
      comment
    }
  }
  `
  
  const result = await request("https://api-us-east-1.hygraph.com/v2/cl8qbvbrp2dmu01t874t53pyd/master", query, {slug})
  return result.comments;
}

const Comments = ({slug}) => {
  useEffect(() => {
    getComments(slug)
    .then((result) => setComments(result))
  }, [])

  const [comments, setComments] = useState([]);

  return (
    <div>
        {comments.length > 0 && (
          <div>
            <p>{comments.length} comments</p>
            <br />
            {comments.map((comment) => 
              <h6><span className={styles.email}>{comment.email}</span> - {comment.comment}</h6>
            )}
            </div>
        )}
    </div>
  )
}

export default Comments