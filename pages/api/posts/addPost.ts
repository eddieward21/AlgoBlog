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
    const {title, body, approach, solution, hint, category} = JSON.parse(req.body)
    const slug = {
        _type: 'slug',
        current: title,
    };

    try {

    await client.create({
        _type: "post",
        hint:hint,
        approach:approach,
        solution:solution,
        title: title,
        body: body,
        slug: slug, 
        /*
        mainImage: {
            asset: {
              _type: 'image',
              asset: {
                _type: 'file',
                file: "https://cdn.sanity.io/images/4whsb59p/production/6cee0a5b64bd190b6e712372ccae23cfb4377972-576x472.png"
              }
            }
          },
          */
        categories: [
            {
              _type: "reference",
              _ref: category,
              _key: category
            },
          ],
        author: {
            _type: 'reference',
            _ref: "4d1f4487-d210-4daa-a45a-48ae7dfd33c9"
        },
    })
} catch(error) {
    console.log(error)
}
console.log("CATEGORY REF FROM API: " + category)
}
