import {GraphQLClient, gql} from "graphql-request"

const graphqlAPI = process.env.API_ENDPOINT

export default async function comments(req, res) {

    const {name, email, slug, comment} = req.body

    console.log()
    console.log(req.body + " - REQ BODY from comments.js")
    console.log()

    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.TOKEN}`
        }
    })
    const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: 
        String!, $slug: String!) {
          createComment(data: {name : $name, email : $email, comment: 
        $comment, post: { connect: { slug: $slug}}}) { id }
        
          }
    
        `
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
}