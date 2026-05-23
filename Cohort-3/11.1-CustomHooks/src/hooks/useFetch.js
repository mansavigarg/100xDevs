import { useState, useEffect } from "react";
export function usePostTitle(){
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false)

    async function getPosts(){
        setLoading(true)
       const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
       const json = await res.json()
       setPost(json);
       setLoading(false)
    }

    useEffect(() => {
        getPosts();
    }, [])

    return {post, loading}
}


export function useFetch(url){
    const [finalData, setFinalData] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(url);
    

    async function getDetails() {
        setLoading(true)
        const res = await fetch(url)
        const json = await res.json()
        setFinalData(json)
        setLoading(false)
    }

    useEffect(() => {
        getDetails();
    }, [url])

    return { finalData, loading }
}