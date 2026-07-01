import axios from "axios";

export default async function({params}: {
    params: {
        postId : string
    }
}){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${(await params).postId}`)

    console.log(response.data)
    return <div>
        {response.data.title}
        <br/>
        {response.data.body}
    </div>
}