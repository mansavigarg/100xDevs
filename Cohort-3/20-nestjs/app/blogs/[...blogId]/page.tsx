import axios from "axios";

export default async function({params}: {
    params: {
        blogId : string
    }
}){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${(await params).blogId[0]}`)

    console.log(response.data)
    return <div>
        {response.data.title}
        <br/>
        {response.data.body}
    </div>
}