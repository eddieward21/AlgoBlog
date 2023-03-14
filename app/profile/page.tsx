'use client'
import React from 'react'
import { useEffect, useState } from "react";

const page = () => {
    const [myData, setMyData] = useState<any>(null);

    useEffect(() => {
      const storedData = localStorage.getItem('user');
  
      if (storedData) {
        setMyData(JSON.parse(storedData));
      }
    }, []);
    const logoutUser = () =>{
        localStorage.clear()
        window.location.href = '/auth/login';
    }
    return (
    <div>
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logoutUser}>Logout</button>
      {myData && <p>{myData[0].name}</p>}
    </div>
  )
}

export default page