// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import client from '../../../utils/client'
import urlFor from '../../../utils/urlFor'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try {

    await client.delete("eUXY84jhmlWBsLz8n9yjCY")
    .then(() => console.log("document deleted"))
} catch(error) {
    console.log(error)
}
}
