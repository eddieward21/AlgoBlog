import client from '../../utils/client'
import { groq } from 'next-sanity';
export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    // Query the Sanity API for a user with the provided email and password

      const query = groq`*[_type == "author" && email == $email && password == $password]`

    const user = await client.fetch(query, { email, password })
    
  

    if (!user) {
      // Return an error response if the user is not found or not authenticated
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Set a cookie or a token to authenticate the user in subsequent requests
    // ...
    // Return a success response with any necessary data
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    // Return an error response if an error occurs
    return res.status(500).json({ message: error.message });
  }
}