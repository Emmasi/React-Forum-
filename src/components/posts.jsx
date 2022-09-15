import { useState,useEffect } from "react"
import Postlayout from "./postlayout"

const Posts =()=>{
    const [allPost,setAllPost]=useState([])

    const getposts = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            return response.json()
        })
        .then ((data)=>{
            setAllPost(data)
        })
        .catch(function(error) {
            console.log(error);
          });
    }

    useEffect(() => {
        getposts();
    },[])
    return(
        <div className="container">
        {allPost.map((post,i)=><Postlayout title={post.title} body={post.body} id={post.id} key={i}/>)}
        </div>
    )


}
export default Posts