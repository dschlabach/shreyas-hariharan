// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    const { email } = req.body
    //@ts-ignore
    const emailReq = await fetch(process.env.WORDPRESS_SUBSCRIBE, {
      method: 'POST',
      body: {
        //@ts-ignore
        email: email,
        action: 'subscribe',
        source: process.env.WORDPRESS_SUBSCRIBE,
        'sub-type': 'widget',
        'redirect-fragment': 'subscribe-blog-blog_subscription-5',
      },
    })
    emailReq.status === 200 ? res.json({ message: 'Success' }) : res.json({ message: 'Error' })
  }
}
