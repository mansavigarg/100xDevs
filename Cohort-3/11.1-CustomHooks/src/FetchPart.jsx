import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useFetch, usePostTitle } from './hooks/useFetch';

function UsingFetchHook(){
    const [currentPost, setCurrentPost] = useState(1)
    const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

    return (
        <div>
            <button onClick={() => {setCurrentPost(1)}}>1</button>
            <button onClick={() => {setCurrentPost(2)}}>2</button>
            <button onClick={() => {setCurrentPost(3)}}>3</button>
            <button onClick={() => {setCurrentPost(4)}}>4</button>
            <div>
                {loading ? "Loading ........." : JSON.stringify(finalData)}
            </div>
        </div>
    )
}

function UsingPostHook(){
    const {post, loading} = usePostTitle()
    return (
        <div>{loading ? "Loading ....." : post.body}</div>
    )
}

const FetchPart = () => {
    return(
    <div>
        <div>
            Using Post Hook : <UsingPostHook />
        </div>
        <div>
            Using Fetch Hook : <UsingFetchHook />
        </div>
    </div>
    )

}

export default FetchPart