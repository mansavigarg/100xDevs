// @ Components, Props and Conditional Rendering, useState, useEffect, Dependency array, cleanup fxn, loading function

import { useState } from "react";
import { PostComponent } from "../../../Week-9.2/src/Post";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [tabData, setTabData] = useState({});
  const [currentTab, setCurrentTab] = useState(1)
  const [loading, setLoading] = useState(true)

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }


  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
        .then(async res => {
            const json = await res.json()
            console.log(json)
            setTabData(json)
            setLoading(false)
        })
  }, [currentTab])

  return (
    // <div style={{background: "#dfe6e9", height: "100vh", }}>
    //   <button onClick={addPost}>Add post</button>
    //   <div style={{display: "flex", justifyContent: "center" }}>
    //     <div>
    //       {postComponents}
    //     </div>
    //   </div>

<div>


      <div>
        <button onClick={() => setCurrentTab(1)} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
        <button onClick={() => setCurrentTab(2)} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
        <button onClick={() => setCurrentTab(3)} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
        <button onClick={() => setCurrentTab(4)} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
      </div>

      <div>
        {loading ? "Loading ....." : tabData.title}
      </div>
      </div>
  )
}

export default App