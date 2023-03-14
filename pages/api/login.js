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
    //res.setHeader("USER", `myData=${userString}; Path=/getUser/`);
    //localStorage.setItem("user", JSON.stringify(user))
    //localStorage.setItem("user", {user})
    //console.log(user)



    if (!user) {
      // Return an error response if the user is not found or not authenticated
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Set a cookie or a token to authenticate the user in subsequent requests
    const { token } = user;
    setCookie({ res }, 'token', token, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    localStorage.setItem('token', token);
    // ...
    // Return a success response with any necessary data
    return res.status(200).json(user)
  } catch (error) {
    // Return an error response if an error occurs
    return res.status(500).json({ message: error.message });
  }
}