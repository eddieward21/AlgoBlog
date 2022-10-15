import {GraphQLClient, gql} from "graphql-request"

const graphqlAPI = process.env.API_ENDPOINT

export async function comments(req, res) {
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.TOKEN}`
        }
    })
    const query = gql`
        mutation CreateComment($name: String!, $email!: String!, $comment: String!, $slug: String!) {
            createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {id}
        }
    `
    const result = await graphQLClient.request(query, {
        name: req.body.name,
        email: req.body.email,
    })
}