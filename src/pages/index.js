import React, { useEffect } from "react"

const Home = () => {
  // Client-side Runtime Data Fetching
  // const [starsCount, setStarsCount] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://reddit.com/r/spacs/hot.json`, { mode: "cors" }).then(
      response => {
        console.log(response)
      }
    )
    // .then(resultData => {
    //   console.log({ resultData })
    // })
  }, [])
  return (
    <section>
      <p>Runtime Data: Star count for the Gatsby repo</p>
    </section>
  )
}
export default Home
