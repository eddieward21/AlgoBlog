import React, {useState, useEffect} from 'react'
import { GraphQLClient, gql } from "graphql-request";


const graphcms = new GraphQLClient(
    process.env.API_ENDPOINT
)



function Comments({slug}) {
    var [comments, setComments] = useState([]);





  return (
    <div>
        Comments

    </div>

  )
}



export default Comments