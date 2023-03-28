import client from '../../utils/client'
import { groq } from 'next-sanity';
import { useState, useEffect } from 'react';
import { setCookie } from 'nookies';

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    // Query the Sanity API for a user with the provided email and password

      const query = groq`*[_type == "author" && email == $email && password == $password]`

    const user = await client.fetch(query, { email, password })  
    console.log("USER from api route ", user)
    console.log(user.length)



    if (user.length === 0) {
      // Return an error response if the user is not found or not authenticated
      return res.status(401);
    }
    // Set a cookie or a token to authenticate the user in subsequent requests
    // Return a success response with any necessary data
    return res.status(200).json(user)
  } catch (error) {
    // Return an error response if an error occurs
    return res.status(500);
  }
}