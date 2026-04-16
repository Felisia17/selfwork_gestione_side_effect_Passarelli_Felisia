import { useEffect } from "react";

function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
    })
}