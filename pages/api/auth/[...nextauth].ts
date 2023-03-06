
import { NextApiHandler } from 'next';
import { signIn } from 'next-auth/react';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const user = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (user) {
        res.status(200).json({ message: 'Authentication successful' });
      } else {
        res.status(401).json({ message: 'Authentication failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Authentication failed' });
    }
  }
};

export default handler;