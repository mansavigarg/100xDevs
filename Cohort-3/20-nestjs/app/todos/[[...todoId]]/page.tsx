import axios from "axios";

export default async function({params}: {
    params: {
        todoId : string
    }
}){
    if(!params.todoId) {
        return <div>
            No todoId provided
        </div>
    }
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${(await params).todoId}`)

    console.log(response.data)
    return <div>
        {response.data.title}
        <br/>
        {response.data.body}
    </div>
}