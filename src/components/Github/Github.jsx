// import React from 'react'

import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom"

function Github() {
    // const data = useLoaderData()
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Annu9111').then(response => response.json()).then(data => {setData(data)})
    },[])


  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Repositories : {data.public_repos} 
      <img src={data.avatar_url} alt="git picture" width={300} className="mx-auto my-4" />

      <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline text-xl"
            >
                Visit My GitHub Profile
            </a>
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch(
//         'https://api.github.com/users/Annu9111'
//     )

//     if (!response.ok) {
//         throw new Error("Failed to fetch GitHub data")
//     }

//     return response.json()
// }

 