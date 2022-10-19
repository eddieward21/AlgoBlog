import {GraphQlClient, gql} from 'graphql-request'

const graphQLAPI = process.env.API_ENDPOINT;

export default async function posts(req, res) {
    const {author, problem, approach, content} = req.body

    const graphQLClient = new GraphQlClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.TOKEN}`
        }
    })

    const query = gql`
    mutation CreatePost($author: String!, $problem: String!, $approach: String!, $content: String!) {
        createPost(data: {author: {connect: name: name } }, problem: problem, approach:approach, content:content})
    }
    `
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result)
}