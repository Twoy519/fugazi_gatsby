import React, { useEffect, useState } from "react"

const Home = () => {
  // Client-side Runtime Data Fetching
  const [spacPosts, setSpacPosts] = useState(null)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://www.reddit.com/r/spacs/hot.json`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log(resultData)
        setSpacPosts(resultData.data.children)
      })
  }, [])
  console.log(spacPosts)
  return (
    <section>
      <h1>Reddit posts from SPAC</h1>
      <ul>
        {spacPosts &&
          spacPosts.map(p => (
            <li key={p?.data?.id}>
              <a href={`https://www.reddit.com${p?.data?.permalink}`}>
                {p?.data?.title}
              </a>
            </li>
          ))}
      </ul>
    </section>
  )
}
export default Home
